const express = require("express")
const database = require("./src/database");

const port = 3000
const app = express()

app.use(express.json())

database.db
    .sync({force: false})
    .then((_) => {
        app.listen(port, () => {
            console.info(`Servidor rodando na porta ${port}.`)
        })
    })
    .catch((e) => {
        console.error(`Não foi possível conectar com o banco: ${e}`)
    })