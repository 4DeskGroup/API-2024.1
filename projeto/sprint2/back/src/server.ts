import mongoose from "mongoose";
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import routerUsuario from "./routes/rotasUsuario";
import routerParceiro from "./routes/rotasParceiro";
import routerExpertise from "./routes/rotasExpertise";

dotenv.config()

const configURL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@api.bn64rby.mongodb.net/${process.env.MONGO_DATABASE}`

//Conexão com banco do MongoDB Atlas (servidor)
mongoose.connect(configURL)
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch(err => {
        console.error('Erro de conexão com o MongoDB:', err);
    });

//Conexão com o localhost do mongo compass lá da maquina da fatec
// mongoose.connect('mongodb://localhost:27017/API-4Desk')
//     .then(() => {
//         console.log('Conectado ao MongoDB');
//     })
//     .catch(err => {
//         console.error('Erro de conexão com o MongoDB:', err);
//     });

const app = express()
app.use(cors())
app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', routerUsuario);
app.use('/', routerParceiro);
app.use('/', routerExpertise);

app.listen(3001, () => {
    console.log("Rodando");
})