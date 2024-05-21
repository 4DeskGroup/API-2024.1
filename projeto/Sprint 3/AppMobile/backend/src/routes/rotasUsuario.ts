import express from 'express';
import { DELUsuario, GETConsultores, GETQuantidadeConsultores, GETUsuarioByID, GETUsuarios, Login, SETUsuario } from '../services/usuarioServices';

const routerUsuario = express.Router();

routerUsuario.post('/cadastrarUsuario', async (req, res) => {
    const retorno = await SETUsuario(req.body)
    const usuario = retorno.Retorno
    console.log(usuario?.nome)
    if (retorno.Sucesso) {
        res.send({ msg: "Usuário cadastrado com sucesso.", Sucesso: retorno.Sucesso, retornoUsuario: retorno.Retorno })
    } else {
        res.send({ msg: "Erro ao cadastrar Usuário.", erro: retorno.Erro })
    }
});

routerUsuario.get('/listarUsuarios', async (req, res) => {
    const result = await GETUsuarios();

    if (result) {
        const usuarioLista = result.retornoUsuarios;

        // Método com For padrãozão
        if (usuarioLista) {
            for (const usuario of usuarioLista) {
                console.log(usuario._id.toString());      //Necessário o toString() para que o retorno seja somente os numeros (GUIDs) do ID.
            }                                              //Caso não passe, ele retornará como new ObjectId('660be7fc9a32d90bf2ea35fa')
        }

        // Método com for each
        usuarioLista?.forEach(usuario => {
            console.log(usuario.nome);
        })

        res.send({ Sucesso: true, Retorno: usuarioLista })
    } else {
        res.send({ msg: "Erro ao buscar usuários.", Erro: result })
    }
});

routerUsuario.get('/ListarQuantidadeConsultores', async (req, res) => {
    const result = await GETQuantidadeConsultores()

    if (result?.Sucesso) {
        const usuarioQuantidade = result.retornoUsuarioQuantidade;

        res.send({ Sucesso: true, Retorno: usuarioQuantidade })
    } else {
        res.send({ msg: "Erro ao buscar consultores.", Erro: result })
    }
});

routerUsuario.get('/getUsuarioByID/:id', async (req, res) => {
    const { id } = req.params

    const result = await GETUsuarioByID(id)

    if (result && result.Sucesso) {
        const expertise = result.retorno
        res.send({ Sucesso: true, Expertise: expertise })
    } else {
        res.send({ msg: "Erro ao buscar expertise.", Erro: result })
    }
});

routerUsuario.delete("/deletarUsuario/:id", async (req, res) => {
    const { id } = req.params

    const result = await DELUsuario(id)

    if (result?.Sucesso) {
        res.send({ msg: "Expertise deletado com sucesso.", Sucesso: result?.Sucesso, Retorno: result?.retorno })
    } else {
        res.send({ msg: "Falha ao deletar expertise.", Sucesso: result?.Sucesso, Retorno: result?.retorno })
    }
});

routerUsuario.post('/login', async (req,res) => {
    const { email, senha } = req.body
    const dados = {email: email, senha: senha}

    const result = await Login(dados)

    if (result && result.Sucesso) {
        res.send({msg: "Login realizado com sucesso", Sucesso: true, Usuario: result.Usuario})
    } else {
        res.send({msg: result?.Mensagem, Sucesso: false, Erro: result?.Erro})
    }
    
})

routerUsuario.get('/GETConsultores', async (req, res) => {
    const result = await GETConsultores()

    if (result && result.Sucesso) {
        const consultores = result.retornoUsuarios
        res.send({ Sucesso: true, Consultores: consultores })
    } else {
        res.send({ msg: "Erro ao buscar consultores.", Erro: result })
    }
});

export default routerUsuario;