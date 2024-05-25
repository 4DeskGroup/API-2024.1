import { Expertise } from '../models/expertise';
import { Parceiro } from "../models/parceiro";
import { GETExpertiseByID, GETExpertises } from "./expertiseServices";

async function SETParceiro(dadosParceiro) {
    try {
        console.log(dadosParceiro);

        if (dadosParceiro) {
            if (dadosParceiro.ExpertisesParceiro.length === 0) {
                return { Sucesso: false, Erro: 'Selecione uma expertise' };
            }

            // Buscar as expertises selecionadas do banco de dados
            const expertisesIds = dadosParceiro.ExpertisesParceiro.map(exp => exp.idExpertise);
            const expertisesSelecionadas = await Expertise.find({ _id: { $in: expertisesIds } });

            // Adicionar os cursos das expertises selecionadas aos cursos realizados do parceiro
            dadosParceiro.ExpertisesParceiro = expertisesSelecionadas.map(expertise => ({
                idExpertise: expertise._id,
                nome: expertise.nome,
                descricao: expertise.descricao,
                cursosRealizados: expertise.cursos.map(curso => ({
                    idCurso: curso._id,
                    nome: curso.nome,
                    descricao: curso.descricao,
                }))
            }));

            // Criar o parceiro no banco de dados
            const parceiro = await Parceiro.create(dadosParceiro);
            console.log(parceiro);
            return { Sucesso: true, Retorno: parceiro };
        }
    } catch (erro) {
        console.error("Erro ao criar parceiro:", erro);
        return { Sucesso: false, Erro: erro };
    }
}


async function GETParceiros() {
    try {
        const parceiroLista = await Parceiro.find().lean()
        if (parceiroLista) {
            return { Sucesso: true, retornoParceiros: parceiroLista }
        }
    } catch (erro) {
        console.log(erro);
        return { Sucesso: false }
    }
}

async function GETParceirosNomeId() {
    try {
        const parceiroLista = await Parceiro.find().lean()
        const parceiroExpertiseNomePorcentagemId: { parceiroNome: string; idParceiro: string }[] = [];
        if (parceiroLista) {
            parceiroLista.forEach(x => {
                parceiroExpertiseNomePorcentagemId.push({
                    parceiroNome: x.nome,
                    idParceiro: String(x._id)
                })
            })
        }
        if (parceiroExpertiseNomePorcentagemId.length > 0) {
            return { Sucesso: true, retornoParceiros: parceiroExpertiseNomePorcentagemId }
        } else {
            return { Sucesso: false, msg: 'Nenhum usuário encontrado' }
        }
    } catch (erro) {
        console.log(erro);
        return { Sucesso: false }
    }
}

async function GETQuantidadeParceiro() {
    try {
        const parceiroQuantidade = await Parceiro.find().countDocuments()

        if (parceiroQuantidade > 0) {
            return { Sucesso: true, retornoParceiros: parceiroQuantidade }
        } else {
            return { Sucesso: false, msg: 'Nenhum usuário encontrado' }
        }
    } catch (erro) {
        console.log(erro);
        return { Sucesso: false }
    }
}

async function GETCursoExpertisesParceiro(idParceiro: string, idExpertise: string) {
    try {
        if (!idParceiro) {
            throw new Error("Sem idParceiro");
        }

        const parceiroRetorno = await Parceiro.findById(idParceiro).lean();

        if (!parceiroRetorno) {
            throw new Error("Parceiro não encontrado");
        }

        const expertiseRetorno = await GETExpertiseByID(idExpertise);
        const expertiseGET = expertiseRetorno?.retorno;

        if (!expertiseGET) {
            throw new Error("Dados da expertise não encontrados");
        }

        const parceiroExpertiseCursos: { expertiseId: string; cursoId: string; cursoNome: string; cursoDescricao: string; isCursoFeito: boolean }[] = [];

        parceiroRetorno.ExpertisesParceiro.forEach(parceiroExpertise => {

            if (String(expertiseGET._id) === String(parceiroExpertise.idExpertise)) {

                expertiseGET.cursos.forEach(expertiseCurso => {
                    const cursoFeito = parceiroExpertise.cursosRealizados.some(cursoParceiro => String(cursoParceiro.idCurso) === String(expertiseCurso._id));
                    parceiroExpertiseCursos.push({
                        cursoId: String(expertiseCurso._id),
                        cursoNome: expertiseCurso.nome,
                        cursoDescricao: expertiseCurso.descricao,
                        expertiseId: String(expertiseGET._id),
                        isCursoFeito: cursoFeito
                    });
                });
            }
        });

        return { Sucesso: true, parceiroExpertiseCursos: parceiroExpertiseCursos };
    } catch (error) {
        console.error(error);
        return { Sucesso: false, error: error };
    }
}

async function GETCursoFilhoExpertisesParceiro(idParceiro: string, idExpertise: string, cursoID: string) {
    try {
        if (!idParceiro) {
            throw new Error("Sem idParceiro");
        }

        const parceiroRetorno = await Parceiro.findById(idParceiro).lean();

        if (!parceiroRetorno) {
            throw new Error("Parceiro não encontrado");
        }

        const expertiseRetorno = await GETExpertiseByID(idExpertise);
        const expertiseGET = expertiseRetorno?.retorno;

        if (!expertiseGET) {
            throw new Error("Dados da expertise não encontrados");
        }

        const parceiroExpertiseCursos: { cursoID: string; filhoCursoId: string; cursoNome: string; cursoDescricao: string; isCursoFeito: boolean, idExpertise: string }[] = [];

        parceiroRetorno.ExpertisesParceiro.forEach(parceiroExpertise => {

            if (String(expertiseGET._id) === String(parceiroExpertise.idExpertise)) {

                expertiseGET.cursos.forEach(expertiseCurso => {
                    if (String(expertiseCurso._id) === cursoID) {
                        const curso = parceiroExpertise.cursosRealizados.find(cursoParceiro => String(cursoParceiro.idCurso) === String(expertiseCurso._id));
                        console.log("CURSO ENCONTRADO:  " + JSON.stringify(curso));

                        expertiseCurso.filhosCurso.forEach(x => {
                            var iscursoFilhoFeito = false
                            if (curso?.filhosCursosRealizados) iscursoFilhoFeito = curso?.filhosCursosRealizados.some(filhoCurso => String(filhoCurso.nome) == String(x.nome))

                            parceiroExpertiseCursos.push({
                                filhoCursoId: String(expertiseCurso._id),
                                cursoNome: x.nome,
                                cursoDescricao: x.descricao,
                                cursoID: String(expertiseGET._id),
                                isCursoFeito: iscursoFilhoFeito !== undefined ? iscursoFilhoFeito : false,
                                idExpertise: idExpertise
                            });

                        })
                    }
                });
            }
        });

        return { Sucesso: true, parceiroExpertiseCursos: parceiroExpertiseCursos };
    } catch (error) {
        console.error(error);
        return { Sucesso: false, error: error };
    }
}

async function GETExpertisesPorcentagem(idParceiro: string) {
    try {
        if (!idParceiro) {
            throw new Error("Sem idParceiro");
        }

        const parceiroRetorno = await Parceiro.findById(idParceiro).lean();

        if (!parceiroRetorno) {
            throw new Error("Parceiro não achado");
        }

        const expertiseRetorno = await GETExpertises();
        const expertiseGET = expertiseRetorno?.retornoExpertises;

        if (!expertiseGET) {
            throw new Error("Expertise data não achado");
        }

        const parceiroExpertiseNomePorcentagemId: { expertise: string; porcentagem: string; idExpertise: string }[] = [];

        parceiroRetorno.ExpertisesParceiro.forEach(parceiroExpertise => {
            let quantidadeUsuario = 0;
            let quantidadeTotal = 0;
            const nomeExpertise = parceiroExpertise.nome;

            expertiseGET.forEach(expertise => {
                if (String(expertise._id) === String(parceiroExpertise.idExpertise)) {
                    quantidadeTotal = expertise.cursos.length;

                    expertise.cursos.forEach(curso => {
                        const cursoParceiro = parceiroExpertise.cursosRealizados.find(cursoRealizado => String(cursoRealizado.idCurso) === String(curso._id));
                        if (cursoParceiro && cursoParceiro.filhosCursosRealizados)  {
                            const todosFilhosPresentes = curso.filhosCurso.every(filhoCurso => 
                                cursoParceiro.filhosCursosRealizados.some(filhoRealizado => String(filhoRealizado.nome) === String(filhoCurso.nome))
                            );

                            if (todosFilhosPresentes) {
                                quantidadeUsuario++;
                            }
                        }
                    });

                    const porcentagem = quantidadeTotal > 0 ? (quantidadeUsuario / quantidadeTotal) * 100 : 0;
                    parceiroExpertiseNomePorcentagemId.push({
                        expertise: nomeExpertise,
                        porcentagem: porcentagem.toFixed(2) + "%",
                        idExpertise: String(parceiroExpertise.idExpertise)
                    });
                }
            });
        });

        return { Sucesso: true, expertisePorcentagens: parceiroExpertiseNomePorcentagemId };
    } catch (error) {
        console.error(error);
        return { Sucesso: false, error: error };
    }
}


async function inserirCursosRealizados(idParceiro: string) {
    try {
        if (!idParceiro) {
            throw new Error("ID do parceiro não fornecido");
        }

        const parceiro = await Parceiro.findById(idParceiro).lean();
        if (!parceiro) {
            throw new Error("Parceiro não encontrado");
        }

        // Iterar sobre as expertises do parceiro
        for (const expertiseParceiro of parceiro.ExpertisesParceiro) {
            // Buscar a expertise correspondente
            const expertise = await Expertise.findById(expertiseParceiro.idExpertise).lean();
            if (!expertise) {
                console.error(`Expertise não encontrada para o parceiro ${parceiro.nome}`);
                continue;
            }

            // Iterar sobre os cursos da expertise e adicioná-los aos cursos realizados do parceiro
            for (const curso of expertise.cursos) {
                // Verificar se o curso já existe nos cursos realizados do parceiro
                const cursoExistente = expertiseParceiro.cursosRealizados.find(cr => String(cr.idCurso) === String(curso._id));
                if (!cursoExistente) {
                    // Adicionar o curso aos cursos realizados do parceiro
                    expertiseParceiro.cursosRealizados.push({
                        idCurso: curso._id,
                        nome: curso.nome,
                        descricao: curso.descricao,
                        filhosCursosRealizados: []
                    });
                }
            }

            // Atualizar o parceiro no banco de dados
            await Parceiro.findByIdAndUpdate(idParceiro, parceiro);
        }

        console.log("Cursos realizados atualizados com sucesso para o parceiro:", parceiro.nome);
    } catch (error) {
        console.error("Erro ao inserir cursos realizados:", error);
    }
}

async function inserirCursosRealizadosParaTodosParceiros() {
    try {
        // Buscar todos os parceiros
        const parceiros = await Parceiro.find().lean();

        // Iterar sobre todos os parceiros
        for (const parceiro of parceiros) {
            // Chamar a função inserirCursosRealizados para o parceiro atual
            await inserirCursosRealizados(String(parceiro._id));
        }

        console.log("Cursos realizados atualizados para todos os parceiros com sucesso.");
    } catch (error) {
        console.error("Erro ao atualizar cursos realizados para todos os parceiros:", error);
    }
}


async function GETCursoPorcentagem(idParceiro: string, idExpertise: string) {
    try {
        console.log('IDPARCEIOR: ' + idParceiro);

        if (!idParceiro || !idExpertise) {
            throw new Error("ID do parceiro ou da expertise não fornecido");
        }

        const parceiroRetorno = await Parceiro.findById(idParceiro).lean();
        if (!parceiroRetorno) {
            throw new Error("Parceiro não encontrado");
        }

        const expertiseRetorno = await Expertise.findById(idExpertise).lean();
        if (!expertiseRetorno) {
            throw new Error("Expertise não encontrada");
        }

        const cursosExpertise = expertiseRetorno.cursos;
        console.log("CURSOS EXPERTISE:  " + JSON.stringify(cursosExpertise));

        const cursosRealizadosParceiro = parceiroRetorno.ExpertisesParceiro
            .find(expertise => String(expertise.idExpertise) === idExpertise)?.cursosRealizados || [];

        const expertisePorcentagens: { nome: string; descricao: string, idCurso: string, porcentagem: string, idExpertise: string }[] = [];
            console.log("SLA:  "+ cursosRealizadosParceiro);

        cursosExpertise.forEach(curso => {
            const cursoRealizado = cursosRealizadosParceiro.find(cr => String(cr.idCurso) === String(curso._id));
            const quantidadeTotal = curso.filhosCurso.length;
            console.log("QUANTIDADE TOTAL:  "+ quantidadeTotal);
            // console.log("QUANTIDADE TENDO:  "+ cursoRealizado?.filhosCursosRealizados.length);
            
            const quantidadeRealizada = cursoRealizado?.filhosCursosRealizados ? cursoRealizado.filhosCursosRealizados.length : 0;
            const porcentagem = quantidadeTotal > 0 ? (quantidadeRealizada / quantidadeTotal) * 100 : 0;
            expertisePorcentagens.push({
                nome: curso.nome,
                descricao: curso.descricao,
                porcentagem: `${porcentagem.toFixed(2)}%`,
                idCurso: String(curso._id),
                idExpertise: idExpertise
            });
        });
console.log("SAIDA CURSOS:  "+ JSON.stringify(expertisePorcentagens) );

        return { Sucesso: true, expertisePorcentagens };
    } catch (error) {
        console.error(error);
        return { Sucesso: false, error: error };
    }
}



async function atualizarCursosParceiro(idParceiro, idExpertise, novosCursos) {
    try {
        const parceiro = await Parceiro.findById(idParceiro);

        if (!parceiro) {
            throw new Error("Parceiro não encontrado");
        }

        const expertiseParceiro = parceiro.ExpertisesParceiro.find(expertise => String(expertise.idExpertise) === String(idExpertise));

        if (!expertiseParceiro) {
            throw new Error("Expertise não encontrada no parceiro");
        }
        novosCursos.forEach(curso => {
            expertiseParceiro.cursosRealizados.push({
                idCurso: curso.idCurso,
                nome: curso.nome,
                descricao: curso.descricao,
                filhosCursosRealizados: []
            });
        });

        await parceiro.save();

        return { Sucesso: true, mensagem: "Cursos adicionados com sucesso" };
    } catch (erro) {
        return { Sucesso: false, Erro: erro };
    }
}


async function atualizarCursosParceiroPorIsCursoFeito(parceiroExpertiseCursos, idParceiro) {
    //parceiroExpertiseNomePorcentagemId: { expertise: string; porcentagem: string; idExpertise: string }[] = []; -- este é o parceiroExpertiseCursos
    try {

        for (const { expertiseId, cursoID, cursoNome, cursoDescricao, isCursoFeito } of parceiroExpertiseCursos) {
            const parceiro = await Parceiro.findById(idParceiro);

            if (!parceiro) {
                throw new Error("Parceiro não encontrado para a expertise fornecida");
            }

            const expertiseParceiro = parceiro.ExpertisesParceiro.find(expertise => String(expertise.idExpertise) === expertiseId);

            if (!expertiseParceiro) {
                throw new Error("Expertise não encontrada no parceiro");
            }

            if (isCursoFeito) {
                // Verifica se o curso já está na lista de cursos realizados
                const cursoExistente = expertiseParceiro.cursosRealizados.find(curso => String(curso.idCurso) === cursoID);

                if (!cursoExistente) {
                    expertiseParceiro.cursosRealizados.push({
                        idCurso: cursoID,
                        nome: cursoNome,
                        descricao: cursoDescricao,
                        filhosCursosRealizados: []
                    });
                }
            } else {
                // Remove o curso se isCursoFeito for falso
                expertiseParceiro.cursosRealizados = expertiseParceiro.cursosRealizados.filter(curso => String(curso.idCurso) !== cursoID);
            }

            await parceiro.save();
        }

        return { Sucesso: true, mensagem: "Cursos atualizados com sucesso" };
    } catch (erro) {
        return { Sucesso: false, Erro: erro };
    }
}

async function atualizarFilhosCursosParceiroPorIsCursoFeito(parceiroExpertiseCursos, idParceiro) {
    try {
        for (const { idExpertise, cursoID, filhoCursoId, cursoNome, cursoDescricao, isCursoFeito } of parceiroExpertiseCursos) {
            const parceiro = await Parceiro.findById(idParceiro);

            if (!parceiro) {
                throw new Error("Parceiro não encontrado para a expertise fornecida");
            }

            const expertiseParceiro = parceiro.ExpertisesParceiro.find(expertise => String(expertise.idExpertise) === idExpertise);

            if (!expertiseParceiro) {
                throw new Error("Expertise não encontrada no parceiro");
            }

            const cursoParceiro = expertiseParceiro.cursosRealizados.find(curso => String(curso.idCurso) === String(filhoCursoId));

            if (!cursoParceiro) {
                throw new Error("Curso não encontrada no parceiro");
            }

            if (isCursoFeito) {
                if (!cursoParceiro.filhosCursosRealizados) {
                    cursoParceiro.filhosCursosRealizados = [];
                }

                const cursoExistente = cursoParceiro.filhosCursosRealizados.find(curso => String(curso.nome) === cursoNome);

                if (!cursoExistente) {
                    console.log("DNS SAPORRA");
                    
                    cursoParceiro.filhosCursosRealizados.push({
                        descricao: cursoDescricao,
                        nome: cursoNome,
                    });
                    console.log("AAASASAS:  "+ JSON.stringify(cursoParceiro.filhosCursosRealizados));
                    
                }
            } else {
                if (cursoParceiro.filhosCursosRealizados) {
                    console.log("ENTRO AQUI?'");
                    
                    cursoParceiro.filhosCursosRealizados = cursoParceiro.filhosCursosRealizados.filter(curso => String(curso.nome) !== cursoNome);
                }
            }

            await parceiro.save();
            console.log(JSON.stringify(parceiro));
            
        }

        return { Sucesso: true, mensagem: "Cursos atualizados com sucesso" };
    } catch (erro) {
        console.error("Erro ao atualizar cursos do parceiro:", erro);
        return { Sucesso: false, Erro: erro };
    }
}


async function cadastrarNovaExpertiseParceiro(idParceiro: string, novasExpertises) {
    try {
        // Verifique se o parceiro existe
        const parceiro = await Parceiro.findById(idParceiro);
        if (!parceiro) {
            throw new Error('Parceiro não encontrado');
        }

        // Para cada nova expertise, verificar se já existe e buscar cursos
        for (const novaExpertise of novasExpertises) {
            const expertiseExistente = parceiro.ExpertisesParceiro.find(exp => exp.nome === novaExpertise.nome);
            if (expertiseExistente) {
                throw new Error(`Expertise '${novaExpertise.nome}' já cadastrada para este parceiro`);
            }

            // Buscar a expertise completa com os cursos
            const expertiseCompleta = await Expertise.findOne({ nome: novaExpertise.nome }).lean();
            if (!expertiseCompleta) {
                throw new Error(`Expertise '${novaExpertise.nome}' não encontrada no banco de dados`);
            }

            // Adicionar os cursos da expertise aos cursos realizados do parceiro
            novaExpertise.cursosRealizados = expertiseCompleta.cursos.map(curso => ({
                idCurso: curso._id,
                nome: curso.nome,
                descricao: curso.descricao,
            }));
        }

        // Adicione as novas expertises ao parceiro e salve
        parceiro.ExpertisesParceiro.push(...novasExpertises);
        await parceiro.save();

        console.log('Expertises cadastradas com sucesso para o parceiro:', parceiro.nome);
    } catch (error) {
        console.error('Erro ao cadastrar expertise:', error);
        throw error;
    }
}


async function GETParceiroByID(id) {
    try {
        // O .lean() faz o retorno do resultado já em um formato de objeto javascript
        const parceiro = await Parceiro.findById(id).lean()
        if (parceiro) {
            return { Sucesso: true, retorno: parceiro }
        }
    } catch (erro) {
        return { Sucesso: false, Erro: erro }
    }
}

async function DELParceiro(id) {
    try {
        const parceiro = await Parceiro.findById(id)

        if (parceiro) {
            parceiro.status = false
            await parceiro.save()

            return { Sucesso: true }
        }
    } catch (erro) {
        return { Sucesso: false, Erro: erro }
    }
}

async function ReativarParceiro(id) {
    try {
        const parceiro = await Parceiro.findById(id)

        if (parceiro) {
            parceiro.status = true
            await parceiro.save()

            return { Sucesso: true }
        }
    } catch (erro) {
        return { Sucesso: false, Erro: erro }
    }
}

export {
    SETParceiro, GETExpertisesPorcentagem, GETParceiros, GETParceirosNomeId,
    GETCursoExpertisesParceiro, atualizarCursosParceiro,
    atualizarCursosParceiroPorIsCursoFeito, cadastrarNovaExpertiseParceiro,
    GETParceiroByID, GETQuantidadeParceiro, DELParceiro, GETCursoPorcentagem,
    inserirCursosRealizadosParaTodosParceiros, GETCursoFilhoExpertisesParceiro, atualizarFilhosCursosParceiroPorIsCursoFeito, ReativarParceiro
}
