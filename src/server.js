const express = require("express")
const configs = require("../src/configs/configs")
const router = require("../src/routers/router")
const data = require("./others/date")
const app = express()

configs.corsConfig(app)
configs.handlebarsConfig(app)
configs.bodyparserConfig(app)
app.use(router)

module.exports = app
