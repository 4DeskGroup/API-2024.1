import mongoose from "mongoose";

interface CursoInterface {
    nome: string;
    descricao: string;
    _id: mongoose.Schema.Types.ObjectId;
}

export interface ExpertiseInterface {
    _id: mongoose.Schema.Types.ObjectId;
    nome: string;
    descricao: string;
    cursos: CursoInterface[];
}

const CursosSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true }
})

const ExpertiseSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    cursos: [CursosSchema]
})

ExpertiseSchema.pre('save', function (next) {
    if (this.cursos.length === 0) {
        next(new Error('Expertise deve ter pelo menos um curso.'));
    } else {
        next();
    }
});

export const Expertise = mongoose.model<ExpertiseInterface>('Expertise', ExpertiseSchema)