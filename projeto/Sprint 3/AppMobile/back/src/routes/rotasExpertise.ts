import express from 'express';
import { DELExpertise, GETExpertiseByID, GETExpertises, SETExpertise, obterDadosCursosExpertise, obterDadosExpertiseDashboard, obterExpertisesDisponiveis } from '../services/expertiseServices';
import { CursoInterface } from 'models/expertise';

const routerExpertise = express.Router();

routerExpertise.post('/cadastrarExpertise', async (req, res) => {
    const retorno = await SETExpertise(req.body)
    const expertise = retorno.Retorno
    console.log(expertise?.descricao)
    if (retorno.Sucesso) {
        res.send({ msg: "Expertise cadastrado com sucesso.", Sucesso: retorno.Sucesso, retornoExpertise: retorno.Retorno })
    } else {
        res.send({ msg: "Erro ao cadastrar Expertise.", erro: retorno.Erro })
    }
});

routerExpertise.get('/listarExpertises', async (req, res) => {
    const result = await GETExpertises()

    if (result) {
        const expertiseLista = result.retornoExpertises
        const listaExpertise: { expertiseID: string; nome: string; descricao: string; cursos: CursoInterface[]; }[] = [];

        // Método com for each
        expertiseLista?.forEach(expertise => {
            listaExpertise.push({
                expertiseID: String(expertise._id),
                nome: expertise.nome,
                descricao: expertise.descricao,
                cursos: expertise.cursos,
            });
        })

        res.send({ Sucesso: true, Retorno: listaExpertise})
    } else {
        res.send({ msg: "Erro ao buscar expertises.", Erro: result })
    }
});

routerExpertise.get('/GETExpertiseGraficos', async (req, res) => {
    const result = await obterDadosExpertiseDashboard()

    if (result) {
        const expertiseLista = result
        res.send({ Sucesso: true, Retorno: expertiseLista})
    } else {
        res.send({ msg: "Erro ao buscar expertises.", Erro: result })
    }
});

routerExpertise.get('/listarExpertisesNomeDesID', async (req, res) => {
    const result = await GETExpertises()

    if (result) {
        const expertiseLista = result.retornoExpertises
        const listaExpertise: { expertiseID: string; nome: string; descricao: string; }[] = [];

        // Método com for each
        expertiseLista?.forEach(expertise => {
            listaExpertise.push({
                expertiseID: String(expertise._id),
                nome: expertise.nome,
                descricao: expertise.descricao,
            });
        })

        res.send({ Sucesso: true, Retorno: listaExpertise})
    } else {
        res.send({ msg: "Erro ao buscar expertises.", Erro: result })
    }
});

routerExpertise.get('/listarExpertisesNomeDesIDPorParceiro/:id', async (req, res) => {
    const { id } = req.params

    const result = await obterExpertisesDisponiveis(id)

    if (result) {
        const expertiseLista = result
        const listaExpertise: { expertiseID: string; nome: string; descricao: string; }[] = [];

        // Método com for each
        expertiseLista?.forEach(expertise => {
            listaExpertise.push({
                expertiseID: String(expertise._id),
                nome: expertise.nome,
                descricao: expertise.descricao,
            });
        })

        res.send({ Sucesso: true, Retorno: listaExpertise})
    } else {
        res.send({ msg: "Erro ao buscar expertises.", Erro: result })
    }
});

routerExpertise.get('/getExpertiseByID/:id', async (req, res) => {
    const { id } = req.params

    const result = await GETExpertiseByID(id)

    if (result && result.Sucesso) {
        const expertise = result.retorno
        res.send({ Sucesso: true, Expertise: expertise })
    } else {
        res.send({ msg: "Erro ao buscar expertise.", Erro: result })
    }
});

routerExpertise.delete("/deletarExpertise/:id", async (req, res) => {
    const { id } = req.params

    const result = await DELExpertise(id)

    if (result?.Sucesso) {
        res.send({ msg: "Expertise deletado com sucesso.", Sucesso: result?.Sucesso, Retorno: result?.retorno })
    } else {
        res.send({ msg: "Falha ao deletar expertise.", Sucesso: result?.Sucesso, Retorno: result?.retorno })
    }
});


routerExpertise.get('/GetExpertiseCursosByID/:id', async (req, res) => {
    const { id } = req.params

    const result = await obterDadosCursosExpertise(id)

    if (result && result) {
        const expertiseCursos = result
        res.send({ Sucesso: true, ExpertiseCursos: expertiseCursos })
    } else {
        res.send({ msg: "Erro ao buscar expertise.", Erro: result })
    }
});

export default routerExpertise;