import { Usuario } from "../models/usuario"

async function SETUsuario(dadosUsuario) {
    try {
        const usuario = await Usuario.create(dadosUsuario)
        return { Sucesso: true, Retorno: usuario}
    } catch (erro) {
        return { Sucesso: false, Erro: erro }
    }
}

async function GETUsuarios() {
    try{
        const usuarioLista = await Usuario.find().lean()
        if (usuarioLista){
            return {Sucesso: true, retornoUsuarios: usuarioLista}
        }
    } catch (erro) {
        console.log(erro);
        return {Sucesso: false}
    }
}

async function GETQuantidadeConsultores() {
    try {
        const usuarioQuantidade = await Usuario.find({ tipoUsuario: 'ConsultorAlianca' }).countDocuments();
        if (usuarioQuantidade) {
            return { Sucesso: true, retornoUsuarioQuantidade: usuarioQuantidade };
        }
    } catch (erro) {
        console.log(erro);
        return { Sucesso: false };
    }
}


async function GETUsuarioByID(id) {
    try{
        // O .lean() faz o retorno do resultado já em um formato de objeto javascript
        const usuario = await Usuario.findById(id).lean()
        if (usuario){
            return {Sucesso: true, retorno: usuario}
        }
    } catch (erro) {
        return {Sucesso: false, Erro: erro}
    }
}

//DELETES
async function DELUsuario(id) {
    try{
        const result = await Usuario.deleteOne({_id: id})
        if (result){
            return {Sucesso: true, retorno: result}
        }
    } catch (erro) {
        return {Sucesso: false, Erro: erro}
    }
}

async function Login(dados) {
    try{
        if (dados) {
            // const filtros = 
            const usuarioEncontrado = await Usuario.findOne({email: dados.email, senha: dados.senha}).lean()
            console.log(usuarioEncontrado)
            if (usuarioEncontrado){
                return {Sucesso: true, Usuario: usuarioEncontrado}
            } else {
                return {Sucesso: false, Mensagem: "E-mail ou senha incorretos."}
            }
        }
    } catch (erro) {
        return {Sucesso: false, Erro: erro}
    }
}

async function GETConsultores() {
    try{
        const consultores = await Usuario.find({ tipoUsuario: 'ConsultorAlianca' }).lean()
        if (consultores){
            return {Sucesso: true, retornoUsuarios: consultores}
        }
    } catch (erro) {
        console.log(erro);
        return {Sucesso: false}
    }
}

export {SETUsuario, GETUsuarioByID, GETUsuarios, DELUsuario, Login, GETQuantidadeConsultores, GETConsultores}
