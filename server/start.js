const fastify = require('fastify');
const routes = require('./routes.jsx');

const myApp = fastify({ logger: true });
routes(myApp);

myApp.listen(8080, "0.0.0.0");