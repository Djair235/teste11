const connection = require("../db/connection")

async function getAll(request, response) {
    try {
        const [rows] = await connection.execute("SELECT id, nome, idade, created_at from CLIENTES")
        return response.status(200).json(rows)
    } catch (error) {
        console.error(`Erro ao buscar os clientes. ${error}`)
        return response.status(400).json({erro: "Erro interno ao ao processar a requisição"})
    }
}
module.exports = { getAll }
