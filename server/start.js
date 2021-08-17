import fastify from 'fastify';
import routes from './routes.js';

const myApp = routes(fastify({ logger: true }));
myApp.listen(8080, "0.0.0.0");