import { Expertise, ExpertiseInterface } from "../models/expertise";
import { Parceiro, ParceiroInterface } from "../models/parceiro";

interface DadosExpertise {
    idExpertise: string;
    nome: string;
    quantidadeCursos: number;
    quantidadeParceiros: number;
}
interface DadosCurso {
    nomeCurso: string; // Nome do curso
    percentualConclusao: number; // Porcentagem de conclusão do curso
    quantidadeParceirosConcluiu: number; // Quantidade de parceiros que concluíram o curso
}


async function SETExpertise(dadosExpertise) {
    try {
        const expertise = await Expertise.create(dadosExpertise)
        return { Sucesso: true, Retorno: expertise}
    } catch (erro) {
        return { Sucesso: false, Erro: erro }
    }
}

async function GETExpertises() {
    try{
        const expertiseLista = await Expertise.find().lean()
        if (expertiseLista){
            return {Sucesso: true, retornoExpertises: expertiseLista}
        }
    } catch (erro) {
        console.log(erro);
        return {Sucesso: false}
    }
}

async function GETExpertiseByID(id) {
    try{
        // O .lean() faz o retorno do resultado já em um formato de objeto javascript
        const expertise = await Expertise.findById(id).lean()
        if (expertise){
            return {Sucesso: true, retorno: expertise}
        }
    } catch (erro) {
        return {Sucesso: false, Erro: erro}
    }
}

//DELETES
async function DELExpertise(id) {
    try{
        const result = await Expertise.deleteOne({_id: id})
        if (result){
            return {Sucesso: true, retorno: result}
        }
    } catch (erro) {
        return {Sucesso: false, Erro: erro}
    }
}

async function adicionarFilhosCursoEmTodasExpertises() {
    try {
        // Busca todas as expertises
        const expertises: ExpertiseInterface[] = await Expertise.find().lean();

        // Verifica se há expertises
        if (expertises.length === 0) {
            console.log('Nenhuma expertise encontrada.');
            return;
        }

        // Adiciona dois filhos de curso para cada expertise
        const promises = expertises.map(async (expertise) => {
            expertise.cursos.forEach(curso => {
                // Verifica se curso.filhosCurso é indefinido e o inicializa como um array vazio, se necessário
                if (!curso.filhosCurso) {
                    curso.filhosCurso = [];
                }
                curso.filhosCurso.push({ nome: 'Nome1', descricao: 'Descrição1' });
                curso.filhosCurso.push({ nome: 'Nome2', descricao: 'Descrição2' });
            });
            await Expertise.findByIdAndUpdate(expertise._id, expertise);
        });

        // Aguarda todas as operações de atualização terminarem
        await Promise.all(promises);

        console.log('Dois filhos de curso adicionados em todas as expertises com sucesso.');
    } catch (error) {
        console.error('Erro ao adicionar filhos de curso em todas as expertises:', error);
    }
}


async function obterDadosExpertiseDashboard() {
    try {
        const expertises: ExpertiseInterface[] = await Expertise.find().lean();
        const dadosExpertise: DadosExpertise[] = await Promise.all(expertises.map(async (expertise) => {
            const idExpertise: string = expertise._id.toString();
            const quantidadeCursos: number = expertise.cursos.length;

            const parceiros: ParceiroInterface[] = await Parceiro.find({ 'ExpertisesParceiro.idExpertise': idExpertise }).lean();
            const quantidadeParceiros: number = parceiros.length;

            let totalCompletos = 0;
            for (const parceiro of parceiros) {
                let completos = 0;
                for (const curso of expertise.cursos) {
                    if (parceiro.ExpertisesParceiro.find(exp => String(exp.idExpertise) === idExpertise && exp.cursosRealizados.find(cur => String(cur.idCurso) === String(curso._id)))) {
                        completos++;
                    }
                }
                if (completos === quantidadeCursos) {
                    totalCompletos++;
                }
            }
            const percentualCompletos: number = (totalCompletos / quantidadeParceiros) * 100;

            return {
                idExpertise,
                nome: expertise.nome,
                quantidadeCursos,
                quantidadeParceiros,
                percentualCompletos
            };
        }));

        return dadosExpertise;
    } catch (error) {
        console.error('Erro ao obter dados de expertise:', error);
        throw error;
    }
}
async function obterDadosCursosExpertise(idExpertise: string) {
    try {
        const expertise: ExpertiseInterface | null = await Expertise.findById(idExpertise).lean();
        if (!expertise) {
            throw new Error(`Expertise com o ID ${idExpertise} não encontrada.`);
        }

        const cursos = expertise.cursos;

        const dadosCursos: DadosCurso[] = [];

        for (const curso of cursos) {
            const quantidadeParceiros: number = await Parceiro.countDocuments({ 'ExpertisesParceiro.idExpertise': idExpertise, 'ExpertisesParceiro.cursosRealizados.idCurso': curso._id });
            const totalParceiros: number = await Parceiro.countDocuments({ 'ExpertisesParceiro.idExpertise': idExpertise });

            const percentualConclusao: number = (quantidadeParceiros / totalParceiros) * 100;

            dadosCursos.push({
                nomeCurso: curso.nome,
                percentualConclusao,
                quantidadeParceirosConcluiu: quantidadeParceiros
            });
        }

        return dadosCursos;
    } catch (error) {
        console.error('Erro ao obter dados dos cursos da expertise:', error);
        throw error;
    }
}

async function obterExpertisesDisponiveis(idParceiro: string) {
    try {
        // Encontrar todas as expertises
        const todasExpertises: ExpertiseInterface[] = await Expertise.find().lean();

        // Encontrar as expertises do parceiro
        const parceiro: ParceiroInterface | null = await Parceiro.findById(idParceiro).lean();
        if (!parceiro) {
            throw new Error(`Parceiro com o ID ${idParceiro} não encontrado.`);
        }
        const expertisesParceiro = parceiro.ExpertisesParceiro.map(exp => exp.idExpertise.toString());

        // Filtrar as expertises disponíveis (que o parceiro ainda não possui)
        const expertisesDisponiveis = todasExpertises.filter(expertise => !expertisesParceiro.includes(expertise._id.toString()));

        return expertisesDisponiveis;
    } catch (error) {
        console.error('Erro ao obter expertises disponíveis:', error);
        throw error;
    }
}


export {SETExpertise, GETExpertises, GETExpertiseByID, DELExpertise,
     obterDadosExpertiseDashboard, obterDadosCursosExpertise, obterExpertisesDisponiveis, adicionarFilhosCursoEmTodasExpertises}