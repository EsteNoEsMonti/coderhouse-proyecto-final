import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Lucas ecommerce documentation',
      description:
        'Documentation of an ecommerce API-Rest application made with Express for the final project of the back-end programming course provided by CODERHOUSE and documented with Swagger.',
      version: '0.0.1',
    },
  },
  apis: ['./docs/**/*.yaml'],
};

export const specs = swaggerJsdoc(options);
