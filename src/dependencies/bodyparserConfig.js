const bodyparser = require("body-parser")

function bodyparserConfig(app) {
    app.use(bodyparser.urlencoded({ extended: false }))
    app.use(bodyparser.json())
}

module.exports = bodyparserConfig;
