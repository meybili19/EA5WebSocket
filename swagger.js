const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'WebSocket Chat API',
            version: '1.0.0',
            description: 'API documentation for WebSocket-based chat application',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
        components: {
            schemas: {
                Message: {
                    type: 'object',
                    properties: {
                        message: { type: 'string', description: 'The message text' },
                        timestamp: { type: 'string', description: 'Timestamp of the message' },
                    },
                },
            },
        },
    },
    apis: ['./swaggerAnnotations.js'], // Path to the annotations file
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = swaggerDocs;
