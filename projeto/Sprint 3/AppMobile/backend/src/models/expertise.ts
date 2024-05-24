import mongoose from "mongoose";

export interface CursoInterface {
    nome: string;
    descricao: string;
    _id: mongoose.Schema.Types.ObjectId;
    filhosCurso: FilhosCursoInterface[];
}

export interface FilhosCursoInterface {
    nome: string;
    descricao: string;
}

export interface ExpertiseInterface {
    _id: mongoose.Schema.Types.ObjectId;
    nome: string;
    descricao: string;
    cursos: CursoInterface[];
}

const FilhosCursosSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true }
})

const CursosSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    filhosCurso: [FilhosCursosSchema]
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