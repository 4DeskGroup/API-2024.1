import express from 'express';
import { SETExpertise, GETExpertiseByID, GETExpertises, DELExpertise } from '../services/expertiseServices';
import { SETUsuario } from '../services/usuarioServices';

const router = express.Router();

router.post('/cadastrarExpertise', async (req, res) => {
    const retorno = await SETExpertise(req.body)
    const expertise = retorno.Retorno
    console.log(expertise?.descricao)
    if (retorno.Sucesso) {
        res.send({ msg: "Expertise cadastrado com sucesso.", Sucesso: retorno.Sucesso, retornoExpertise: retorno.Retorno })
    } else {
        res.send({ msg: "Erro ao cadastrar Expertise.", erro: retorno.Erro })
    }
});

router.get('/listarExpertises', async (req, res) => {
    const result = await GETExpertises()

    if (result) {
        const expertiseLista = result.retornoExpertises
        
        // Método com For padrãozão
        if (expertiseLista){
            for (const expertise of expertiseLista) {
                console.log(expertise._id.toString())      //Necessário o toString() para que o retorno seja somente os numeros (GUIDs) do ID.
            }                                              //Caso não passe, ele retornará como new ObjectId('660be7fc9a32d90bf2ea35fa')
        }
        
        // Método com for each
        expertiseLista?.forEach(expertise => {
            console.log(expertise.cursos)
        })
        
        res.send({ Sucesso: true, Retorno: expertiseLista })
    } else {
        res.send({ msg: "Erro ao buscar expertises.", Erro: result })
    }
});

router.get('/getExpertiseByID/:id', async (req, res) => {
    const { id } = req.params

    const result = await GETExpertiseByID(id)
   
    if (result && result.Sucesso) {
        const expertise = result.retorno
        res.send({ Sucesso: true, Expertise: expertise})
    } else {
        res.send({ msg: "Erro ao buscar expertise.", Erro: result })
    }
});

router.delete("/deletarUsuario/:id", async (req, res) => {
    const { id } = req.params

    const result = await DELExpertise(id)

    if (result?.Sucesso) {
        res.send({msg: "Expertise deletado com sucesso.", Sucesso: result?.Sucesso, Retorno: result?.retorno})
    } else {
        res.send({msg: "Falha ao deletar expertise.", Sucesso: result?.Sucesso, Retorno: result?.retorno})
    }
});

router.post('/cadastrarUsuario', async (req, res) => {
    const retorno = await SETUsuario(req.body)
    const usuario = retorno.Retorno
    console.log(usuario?.nome)
    if (retorno.Sucesso) {
        res.send({ msg: "Usuario cadastrado com sucesso.", Sucesso: retorno.Sucesso, retornoUsuario: retorno.Retorno })
    } else {
        res.send({ msg: "Erro ao cadastrar Usuario.", erro: retorno.Erro })
    }
});


export default router;