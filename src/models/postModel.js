const connection = require("../db/connection")
const data = require("../others/date")

async function postAll(request, response) {
    const { usuario, idade } = await request.body
    if (!usuario || !idade) {
        response.status(400).json({
            erro: "Usúario ou idade faltando!"
        })
        return
    }
    try {
        const { usuario, idade } = await request.body
        const query = "INSERT INTO CLIENTES(nome, idade, created_at) values(?, ?, ?)";
        const dataAtual = data.mostrarData()
        const result = connection.execute(query, [usuario, idade, dataAtual])
        return response.status(201).json({mensagem: "Informações gravadas com sucesso!"})
    } catch (error) {
        response.status(500).json({erro: `Erro ao processar as informações: ${error}`})
    }
}

module.exports = { postAll }
