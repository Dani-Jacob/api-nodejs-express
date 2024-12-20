const swaggerAutogen = require('swagger-autogen')()

outputFile = './src/swagger_output.json';
endpointsFiles = ['./app.js']

const doc = {
    info: {
      version: '1.0.0',      // by default: '1.0.0'
      title: ' API de Gestão de Usuários e Plantas com Node.js e Express.js',        // by default: 'REST API'
      description: 'Este é um projeto de API RESTful desenvolvido com Node.js e Express.js como parte de um trabalho acadêmico na UTFPR. A API permite a gestão de usuários e plantas, incluindo operações de criação, leitura, atualização e exclusão (CRUD).',  // by default: ''
    },
    host: 'localhost:3000',      // by default: 'localhost:3000'
    basePath: '',  // by default: '/'
    schemes: [],   // by default: ['http']
    consumes: [],  // by default: ['application/json']
    produces: [],  // by default: ['application/json']
    tags: [        // by default: empty Array
      {
        name: '',         // Tag name
        description: '',  // Tag description
      },
      // { ... }
    ],
    securityDefinitions: {},  // by default: empty object
    definitions: {},          // by default: empty object (Swagger 2.0)
    components: {}            // by default: empty object (OpenAPI 3.x)
  };

swaggerAutogen(outputFile, endpointsFiles, doc)
