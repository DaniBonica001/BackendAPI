import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger_output.json'
const endpointsFiles = ['../Routes/eventRoutes.js','../Routes/customerRoutes.js']

swaggerAutogen(outputFile, endpointsFiles)