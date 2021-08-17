const React = require('react');
const path = require('path');
const { readFile } = require('fs/promises');
const fastifyStatic = require('fastify-static');
const isMobile = require('is-mobile');
const ReactDOMServer = require('react-dom/server.js');
const SSR = require('./components/SSR.jsx');

module.exports = (myApp) => {
  myApp.register(fastifyStatic, { root: path.resolve('./server/assets') });

  myApp.get('/detection', async (request, reply) => {
    const isMobileReq = isMobile({ ua: request });

    const templateHtml = new String(await readFile('server/templates/detection.html'));
    const renderedHtml = templateHtml
      .replace('#{client}', isMobileReq === true ? 'Mobile' : 'Desktop')
      .replace('#{useragent}', request.headers['user-agent'] ?? 'undefined');

    reply.type('text/html');
    reply.send(renderedHtml);
  });

  myApp.get('/ssr', async (request, reply) => {
    const templateHtml = new String(await readFile('server/templates/ssr.html'));
    const reactHtml = ReactDOMServer.renderToString(<SSR />);
    const renderedHtml = templateHtml.replace('#{react}', reactHtml);

    reply.type('text/html');
    reply.send(renderedHtml);
  });

  return myApp;
}