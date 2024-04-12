import { Expertise } from "../models/expertise";

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

export {SETExpertise, GETExpertises, GETExpertiseByID, DELExpertise}