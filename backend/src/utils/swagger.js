const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Condominiums API',
      version: '1.0.0'
    }
  },
  apis: ['src/core/users/users.router.js']
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(swaggerSpec)
};
