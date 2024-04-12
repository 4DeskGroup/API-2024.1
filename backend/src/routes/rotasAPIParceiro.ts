import express from 'express';
import { GETCursoExpertisesParceiro, GETExpertisesPorcentagem, GETParceirosNomeId, SETParceiro, atualizarCursosParceiro } from '../services/parceiroServices';

const router = express.Router();

router.get('/GETParceirosNomeId', async (req, res) => {

    const result = await GETParceirosNomeId()
   
    if (result && result.Sucesso) {
        const parceiros = result.retornoParceiros
        res.send({ Sucesso: true, Parceiros: parceiros})
    } else {
        res.send({ msg: "Erro ao buscar parceiros.", Erro: result })
    }
});

router.post('/GETCursoExpertisesParceiro', async (req, res) => {
    const idParceiro = req.body.idParceiro
    const idExpertise = req.body.idExpertise

    const result = await GETCursoExpertisesParceiro(idParceiro, idExpertise)
   
    if (result && result.Sucesso) {
        const parceiroExpertiseCursos = result.parceiroExpertiseCursos
        res.send({ Sucesso: true, parceiroExpertiseCursos: parceiroExpertiseCursos})
    } else {
        res.send({ msg: "Erro ao buscar Os cursos da expertise e do parceiro.", Erro: result })
    }
});


router.get('/GETExpertisesPorcentagem/:id', async (req, res) => {
    const { id } = req.params

    const result = await GETExpertisesPorcentagem(id)
   
    if (result && result.Sucesso) {
        const expertise = result.expertisePorcentagens
        res.send({ Sucesso: true, ExpertisePorcentagem: expertise})
    } else {
        res.send({ msg: "Erro ao buscar expertise.", Erro: result })
    }
});

router.post('/atualizarCursosParceiro', async (req, res) => {
    const idParceiro = req.body.idParceiro;
    const idExpertise = req.body.idExpertise;
    const novosCursos = req.body.novosCursos;

    const resultado = await atualizarCursosParceiro(idParceiro, idExpertise, novosCursos);

    if (resultado.Sucesso) {
        res.send({ msg: "Cursos adicionados com sucesso.", Sucesso: resultado.Sucesso });
    } else {
        res.send({ msg: "Erro ao adicionar cursos.", erro: resultado.Erro });
    }
});



router.post('/cadastrarParceiro', async (req, res) => {
    const retorno = await SETParceiro(req.body)
    const usuario = retorno?.Retorno
    console.log(usuario?.nome)
    if (retorno?.Sucesso) {
        res.send({ msg: "Parceiro cadastrado com sucesso.", Sucesso: retorno.Sucesso, retornoUsuario: retorno.Retorno })
    } else {
        res.send({ msg: "Erro ao cadastrar Usuario.", erro: retorno?.Erro })
    }
});


export default router;