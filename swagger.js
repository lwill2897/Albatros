const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const swaggerOptions = {
  swaggerDefinition: swaggerDocument,
  apis: ['./routes/*.js']
};

const swagger = swaggerUi.serve(swaggerOptions);

module.exports = swagger;