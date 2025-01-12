const { engine } = require("express-handlebars")

function handlebarsConfig(app) {
    app.engine("handlebars", engine({ defaultLayout: "main" }))
    app.set("view engine", "handlebars")
}

module.exports = handlebarsConfig;
