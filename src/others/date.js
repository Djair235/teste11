function mostrarData() {
    const dateMili = Date.now()
    const date = new Date(dateMili)
    const novaData = date.toLocaleString()
    return novaData
}
module.exports = { mostrarData }
