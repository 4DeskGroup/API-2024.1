import mongoose from "mongoose";

export interface Usuario {
    _id: mongoose.Schema.Types.ObjectId;
    nome: string;
    email: string;
    senha: string;
    tipoUsuario: "Administrador" | "ConsultorAlianca";
    status: boolean;
}

const UsuarioSchema = new mongoose.Schema({
    nome: {type: String, required: true, unique: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    tipoUsuario: {type: String, required: true, enum: ["Administrador", "ConsultorAlianca"]},
    status: {type: Boolean, default: true}
})

export const Usuario = mongoose.model<Usuario>('Usuario', UsuarioSchema)
