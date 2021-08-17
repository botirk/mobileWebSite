import path from 'path';
import fastifyStatic from 'fastify-static';
import { readFile } from 'node:fs/promises';
import isMobile from 'is-mobile';
import React from 'react';
import ReactDOMServer from 'react-dom/server.js';
import HelloWorld from './components/HelloWorld';

export default (myApp) => {
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
    const reactHtml = ReactDOMServer.renderToString(HelloWorld);

    const renderedHtml = templateHtml.replace('#{react}', reactHtml);

    reply.type('text/html');
    reply.send(renderedHtml);
  });

  return myApp;
}