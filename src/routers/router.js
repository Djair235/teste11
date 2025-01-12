const express = require("express")
const app = express()
const router = express.Router()

const getModel = require("../models/getModel")
const postModel = require("../models/postModel")

// PRIMEIRA TENTATIVA DE CRIAR UMA API
router.get("/api", (req, res) => {
    res.status(200).json({mensagem: "Minha APi está funcionando!"})
})

// ROTA DE ACESSO DO FORMULÁRIO
router.get("/sistema", (req, res) => {
    res.render("formulario")
})

// ROTAS CRUD
    // PUXA TODAS AS INFORMAÇÕES DA TABELA CLIENTES DO BANCO DE DADOS
    router.get("/puxarInformacao", getModel.getAll)
    // ADICIONA INFORMAÇÕES AO BANCO DE DADOS (SÓ PODE SER ACESSADO DPS DA SUBMISSÃO DO FORMULÁRIO)
    router.post("/teste", postModel.postAll)

module.exports = router
