import { Parceiro } from "../models/parceiro";
import { GETExpertiseByID, GETExpertises } from "./expertiseServices";

async function SETParceiro(dadosParceiro) {
    try {
        console.log(dadosParceiro);
        
        if (dadosParceiro) {
            
            if(dadosParceiro.ExpertisesParceiro.length === 0)return {Sucesso: false, Erro: 'Selecione uma expertise'}

            const parceiro = await Parceiro.create(dadosParceiro)
            console.log(parceiro)
            return { Sucesso: true, Retorno: parceiro }
        }
    } catch (erro) {
        return { Sucesso: false, Erro: erro }
    }
}

async function GETParceiros() {
    try{
        const parceiroLista = await Parceiro.find().lean()
        if (parceiroLista){
            return {Sucesso: true, retornoParceiros: parceiroLista}
        }
    } catch (erro) {
        console.log(erro);
        return {Sucesso: false}
    }
}

async function GETParceirosNomeId() {
    try{
        const parceiroLista = await Parceiro.find().lean()
        const parceiroExpertiseNomePorcentagemId: { parceiroNome: string; idParceiro: string }[] = [];
        if(parceiroLista){
            parceiroLista.forEach(x =>{
                parceiroExpertiseNomePorcentagemId.push({
                    parceiroNome: x.nome,
                    idParceiro: String(x._id)
                })
            })
        }
        if (parceiroExpertiseNomePorcentagemId.length > 0){
            return {Sucesso: true, retornoParceiros: parceiroExpertiseNomePorcentagemId}
        }else{
            return{Sucesso: false, msg: 'Nenhum usuário encontrado'}
        }
    } catch (erro) {
        console.log(erro);
        return {Sucesso: false}
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
            var quantidadeUsuario = 0;
            var quantidadeTotal = 0;
            var nomeExpertise = parceiroExpertise.nome;

            
            expertiseGET.forEach(expertise => {
                
                if (String(expertise._id) === String(parceiroExpertise.idExpertise)) {

                    quantidadeTotal = expertise.cursos.length;
                    quantidadeUsuario = parceiroExpertise.cursosRealizados.length

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
                descricao: curso.descricao
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
        
        for (const { expertiseId, cursoId, cursoNome, cursoDescricao, isCursoFeito } of parceiroExpertiseCursos) {
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
                const cursoExistente = expertiseParceiro.cursosRealizados.find(curso => String(curso.idCurso) === cursoId);

                if (!cursoExistente) {
                    expertiseParceiro.cursosRealizados.push({
                        idCurso: cursoId,
                        nome: cursoNome,
                        descricao: cursoDescricao
                    });
                }
            } else {
                // Remove o curso se isCursoFeito for falso
                expertiseParceiro.cursosRealizados = expertiseParceiro.cursosRealizados.filter(curso => String(curso.idCurso) !== cursoId);
            }

            await parceiro.save();
        }

        return { Sucesso: true, mensagem: "Cursos atualizados com sucesso" };
    } catch (erro) {
        return { Sucesso: false, Erro: erro };
    }
}


async function cadastrarNovaExpertiseParceiro(idParceiro, expertise) {
    try {
        // Verifique se o parceiro existe
        const parceiro = await Parceiro.findById(idParceiro);
        if (!parceiro) {
            throw new Error('Parceiro não encontrado');
        }

        // Verifique se a expertise já existe no parceiro
        const expertiseExistente = parceiro.ExpertisesParceiro.find(exp => exp.nome === expertise.nome);
        if (expertiseExistente) {
            throw new Error('Expertise já cadastrada para este parceiro');
        }

        // Adicione a nova expertise ao parceiro e salve
        parceiro.ExpertisesParceiro.push(expertise);
        await parceiro.save();
        console.log('Expertise cadastrada com sucesso para o parceiro:', parceiro.nome);
    } catch (error) {
        console.error('Erro ao cadastrar expertise:', error);
    }
}


export {SETParceiro, GETExpertisesPorcentagem, GETParceiros, GETParceirosNomeId,
     GETCursoExpertisesParceiro, atualizarCursosParceiro,
     atualizarCursosParceiroPorIsCursoFeito, cadastrarNovaExpertiseParceiro}
