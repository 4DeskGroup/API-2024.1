import express from 'express';
import { atualizarCursosParceiro, atualizarCursosParceiroPorIsCursoFeito, atualizarFilhosCursosParceiroPorIsCursoFeito, cadastrarNovaExpertiseParceiro, DELParceiro, gerarExcelCursos, gerarExcelCursosDaExpertise, gerarExcelParceiros, GETCursoExpertisesParceiro, GETCursoFilhoExpertisesParceiro, GETCursoPorcentagem, GETExpertisesPorcentagem, GETParceiroByID, GETParceiros, GETParceirosNomeId, GETQuantidadeParceiro, inserirCursosRealizadosParaTodosParceiros, ReativarParceiro, SETParceiro } from '../services/parceiroServices';
import fs from 'fs';

const routerParceiro = express.Router();

routerParceiro.get('/GETParceirosNomeId', async (req, res) => {

    const result = await GETParceirosNomeId()
   
    if (result && result.Sucesso) {
        const parceiros = result.retornoParceiros
        res.send({ Sucesso: true, Parceiros: parceiros})
    } else {
        res.send({ msg: "Erro ao buscar parceiros.", Erro: result })
    }
});

routerParceiro.post('/GETCursoExpertisesParceiro', async (req, res) => {
    const idParceiro = req.body.IdParceiro
    const idExpertise = req.body.IdExpertise

    const result = await GETCursoExpertisesParceiro(idParceiro, idExpertise)
   
    if (result && result.Sucesso) {
        const parceiroExpertiseCursos = result.parceiroExpertiseCursos
        res.send({ Sucesso: true, parceiroExpertiseCursos: parceiroExpertiseCursos})
    } else {
        res.send({ msg: "Erro ao buscar Os cursos da expertise e do parceiro.", Erro: result })
    }
});

routerParceiro.post('/GETCursoFilhosExpertisesParceiro', async (req, res) => {
    const idParceiro = req.body.IdParceiro
    const idExpertise = req.body.IdExpertise
    const idCurso = req.body.IdCurso

    const result = await GETCursoFilhoExpertisesParceiro(idParceiro, idExpertise, idCurso)
   
    if (result && result.Sucesso) {
        const parceiroExpertiseCursos = result.parceiroExpertiseCursos
        res.send({ Sucesso: true, parceiroExpertiseCursos: parceiroExpertiseCursos})
    } else {
        res.send({ msg: "Erro ao buscar Os cursos da expertise e do parceiro.", Erro: result })
    }
});

routerParceiro.get('/GetParceiroQuantidade', async (req, res) => {

    const result = await GETQuantidadeParceiro()
   
    if (result && result.Sucesso) {
        const quantidadeParceiros = result.retornoParceiros
        res.send({ Sucesso: true, QuantidadeParceiros: quantidadeParceiros})
    } else {
        res.send({ msg: "Erro ao buscar parceiro.", Erro: result })
    }
});

routerParceiro.get('/GETExpertisesPorcentagem/:id', async (req, res) => {
    const { id } = req.params

    const result = await GETExpertisesPorcentagem(id)
   
    if (result && result.Sucesso) {
        const expertise = result.expertisePorcentagens
        res.send({ Sucesso: true, ExpertisePorcentagem: expertise})
    } else {
        res.send({ msg: "Erro ao buscar expertise.", Erro: result })
    }
});

routerParceiro.get('/inserirCursosRealizadosParaTodosParceiros', async (req, res) => {
    const result = await inserirCursosRealizadosParaTodosParceiros()
});

routerParceiro.get('/GETCursosPorcentagem/:idParceiro/:idExpertise', async (req, res) => {
    const { idParceiro, idExpertise } = req.params;

    try {
        const result = await GETCursoPorcentagem(idParceiro, idExpertise);

        if (result && result.Sucesso) {
            const expertise = result.expertisePorcentagens;
            res.send({ Sucesso: true, ExpertisePorcentagem: expertise });
        } else {
            res.send({ Sucesso: false, msg: "Erro ao buscar expertise.", Erro: result.error });
        }
    } catch (error) {
        res.send({ Sucesso: false, msg: "Erro ao buscar expertise.", Erro: error });
    }
});


routerParceiro.post('/atualizarCursosParceiro', async (req, res) => {
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


routerParceiro.post('/cadastrarParceiro', async (req, res) => {
    const retorno = await SETParceiro(req.body.dadosParceiro)
    const parceiro = retorno?.Retorno
    console.log(parceiro?.nome)
    if (retorno?.Sucesso) {
        res.send({ msg: "Parceiro cadastrado com sucesso.", Sucesso: retorno.Sucesso, retornoUsuario: retorno.Retorno })
    } else {
        res.send({ msg: "Erro ao cadastrar Parceiro.", erro: retorno?.Erro })
    }
});

routerParceiro.post('/atualizarCursosParceiroPorIsCursoFeito', async (req, res) => {
    const lista = req.body.lista
    const IdParceiro = req.body.IdParceiro
    
    const retorno = await atualizarCursosParceiroPorIsCursoFeito(lista, IdParceiro)

    if (retorno?.Sucesso) {
        res.send({ msg: "Cursos atualizados com sucesso.", Sucesso: retorno.Sucesso })
    } else {
        res.send({ msg: "Erro ao cadastrar Usuario.", erro: retorno?.Erro })
    }
});

routerParceiro.post('/atualizarCursosFilhoParceiroPorIsCursoFeito', async (req, res) => {
    const lista = req.body.lista
    const IdParceiro = req.body.IdParceiro
    
    const retorno = await atualizarFilhosCursosParceiroPorIsCursoFeito(lista, IdParceiro)

    if (retorno?.Sucesso) {
        res.send({ msg: "Cursos atualizados com sucesso.", Sucesso: retorno.Sucesso })
    } else {
        res.send({ msg: "Erro ao cadastrar Usuario.", erro: retorno?.Erro })
    }
});

routerParceiro.post('/cadastrarExpertiseParceiro', async (req, res) => {
    try {
        const idParceiro = req.body.idParceiro;
        const novasExpertises = req.body.novasExpertises; // Supondo que os dados das novas expertises estejam no corpo da requisição como um array

        await cadastrarNovaExpertiseParceiro(idParceiro, novasExpertises);

        res.status(200).send({ msg: "Expertises cadastradas com sucesso." });
    } catch (error) {
        console.error('Erro ao cadastrar expertises:', error);
        res.status(500).send({ msg: "Erro ao cadastrar expertises.", erro: error });
    }
});

routerParceiro.get('/getParceiroByID/:id', async (req, res) => {
    const { id } = req.params

    const result = await GETParceiroByID(id)

    if (result && result.Sucesso) {
        const parceiro = result.retorno
        res.send({ Sucesso: true, Parceiro: parceiro })
    } else {
        res.send({ msg: "Erro ao buscar parceiro.", Erro: result })
    }
});

routerParceiro.get('/GETParceiros', async (req, res) => {

    const result = await GETParceiros()
   
    if (result && result.Sucesso) {
        const parceiros = result.retornoParceiros
        res.send({ Sucesso: true, Parceiros: parceiros})
    } else {
        res.send({ msg: "Erro ao buscar parceiros.", Erro: result })
    }
});

routerParceiro.put("/deletarParceiro/:id", async (req, res) => {
    const { id } = req.params

    const result = await DELParceiro(id)

    if (result?.Sucesso) {
        res.send({ msg: "Parceiro deletado com sucesso.", Sucesso: result?.Sucesso }) //, Retorno: result?.retorno })
    } else {
        res.send({ msg: "Falha ao deletar Parceiro.", Sucesso: result?.Sucesso, Erro: result?.Erro })
    }
});

routerParceiro.put("/reativarParceiro/:id", async (req, res) => {
    const { id } = req.params

    const result = await ReativarParceiro(id);

    if (result?.Sucesso) {
        res.send({ msg: "Parceiro reativado com sucesso.", Sucesso: result?.Sucesso }) //, Retorno: result?.retorno })
    } else {
        res.send({ msg: "Falha ao reativar Parceiro.", Sucesso: result?.Sucesso, Erro: result?.Erro })
    }
});

routerParceiro.get('/download-parceiros', async (req, res) => {
    try {
        const { email } = req.query; // Captura o parâmetro de e-mail da requisição
        console.log(email);
        if (!email) {
            return res.status(400).send('O parâmetro de e-mail é obrigatório.');
        }

        await gerarExcelParceiros(String(email)); // Chama a função passando o e-mail como argumento
        res.send('Arquivo Excel gerado e enviado por e-mail.');
    } catch (error) {
        console.error('Erro ao gerar o arquivo Excel:', error);
        res.status(500).send('Erro ao gerar o arquivo Excel');
    }
});

routerParceiro.get('/download-parceirosCursos', async (req, res) => {
    try {
        const { email } = req.query; // Captura o parâmetro de e-mail da requisição
        console.log(email);
        if (!email) {
            return res.status(400).send('O parâmetro de e-mail é obrigatório.');
        }

        await gerarExcelCursos(String(email)); // Chama a função passando o e-mail como argumento
        res.send('Arquivo Excel gerado e enviado por e-mail.');
    } catch (error) {
        console.error('Erro ao gerar o arquivo Excel:', error);
        res.status(500).send('Erro ao gerar o arquivo Excel');
    }
});

routerParceiro.get('/download-parceirosCursosExpertise', async (req, res) => {
    try {
        const { email } = req.query; // Captura o parâmetro de e-mail da requisição
        console.log(email);
        
        if (!email) {
            return res.status(400).send('O parâmetro de e-mail é obrigatório.');
        }

        await gerarExcelCursosDaExpertise(String(email)); // Chama a função passando o e-mail como argumento
        res.send('Arquivo Excel gerado e enviado por e-mail.');
    } catch (error) {
        console.error('Erro ao gerar o arquivo Excel:', error);
        res.status(500).send('Erro ao gerar o arquivo Excel');
    }
});

export default routerParceiro;