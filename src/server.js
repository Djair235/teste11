const express = require("express")
const configs = require("../src/configs/configs")
const router = require("../src/routers/router")
const data = require("./others/date")
const app = express()

configs.corsConfig(app)
configs.handlebarsConfig(app)
configs.bodyparserConfig(app)
app.use(router)

function startServer() {
    try {
        app.listen(process.env.PORT || 8081, (error) => {
            console.log("Servidor rodando em http://localhost:8081")
            console.log(data.mostrarData())
        })
    } catch {
        console.error("Falha ao iniciar o servidor")
    }
}
startServer()
