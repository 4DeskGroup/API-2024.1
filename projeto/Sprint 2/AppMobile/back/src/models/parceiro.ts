import mongoose from "mongoose";

interface Endereco {
    cep: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    uf: string;
    _id: mongoose.Schema.Types.ObjectId;
}

export interface ExpertiseInterface {
    _id: mongoose.Schema.Types.ObjectId;
    idExpertise: mongoose.Schema.Types.ObjectId;
    nome: string;
    descricao: string;
    cursosRealizados: CursosRealizados[];
}

interface CursosRealizados {
    nome: string;
    descricao: string;
    idCurso: mongoose.Schema.Types.ObjectId;
}

export interface ParceiroInterface {
    _id: mongoose.Schema.Types.ObjectId;
    nome: string;                           //CompanyName
    pais: string;                           //Country
    // cidade: string;,                 // City
    endereco: Endereco[];                   // Address
    // endereco: string;
    // cidade: string;
    OPNAdminName: string;                   // OPN Admin Name
    OPNAdminEmail: string;                  // OPN Admin Email
    ComplianceHold: string;                 // Compliance Hold
    CreditHold: number;                     // Credit Hold            
    OPNStatus: string;                      // OPN Status
    tipoMembro: string;                     // Membership Type
    OPNTrack: string;                       // OPN Track
    primeiroMembro: string;                 // First Membership
    slogan: string;                         // Slogan
    ExpertisesParceiro: ExpertiseInterface[];
}

const CursosRealizadosSchema = new mongoose.Schema({
    idCurso:{type: mongoose.Schema.Types.ObjectId, required: false},
    nome: { type: String, required: false },
    descricao: { type: String, required: false }
})

const ExpertisesParceiroSchema = new mongoose.Schema({
    idExpertise:{type: mongoose.Schema.Types.ObjectId, required: false},
    nome: {type: String, required: false, index: true},
    descricao: {type: String, required: false},
    cursosRealizados: [CursosRealizadosSchema]
})

const EnderecoSchema = new mongoose.Schema({
    cep: {type: String, required: true},
    logradouro: {type: String, required: true},
    bairro: {type: String, required: true},
    cidade: {type: String, required: true},
    uf: {type: String, required: true}
})

const ParceiroSchema = new mongoose.Schema({
    nome: {type: String, required: true, index: true},      //CompanyName
    pais: {type: String, required: true},                   //Country
    endereco: [EnderecoSchema],                             // Address
    // endereco: {type: String, required: true},
    // cidade: {type: String, required: true},
    OPNAdminName: {type: String, required: true},           // OPN Admin Name
    OPNAdminEmail: {type: String, required: true},          // OPN Admin Email
    ComplianceHold: {type: String, required: true},         // Compliance Hold
    CreditHold: {type: Number, required: true},             // Credit Hold            
    OPNStatus: {type: String, required: true},              // OPN Status
    tipoMembro: {type: String, required: true},             // Membership Type
    OPNTrack: {type: String, required: true},               // OPN Track
    primeiroMembro: {type: String, required: true},         // First Membership
    slogan: {type: String, required: true},                 // Slogan
    ExpertisesParceiro: [ExpertisesParceiroSchema]          // Lista de cursos realizados (de qualquer expertise)
})

export const Parceiro = mongoose.model<ParceiroInterface>('Parceiro', ParceiroSchema)