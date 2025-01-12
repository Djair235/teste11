const fs = require('fs');
const handlebars = require('handlebars');

module.exports = async (req, res) => {
  try {
    // Leia o conteúdo do arquivo formulario.handlebars
    const templateSource = fs.readFileSync(path.resolve(__dirname, '../src/views/formulario.handlebars'), 'utf-8');

    // Compile o template
    const template = handlebars.compile(templateSource);

    // Defina os dados a serem inseridos no template
    const data = {
      // Seus dados aqui
    };

    // Renderize o template com os dados
    const result = template(data);

    // Envie a resposta
    res.status(200).send(result);
  } catch (error) {
    console.error('Erro ao renderizar o template:', error);
    res.status(500).send('Erro interno do servidor');
  }
};
