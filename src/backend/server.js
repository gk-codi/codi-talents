import App from '../frontend/App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import bodyParser from 'body-parser';
import { renderToString } from 'react-dom/server';

import api_routes from './routes';
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server.disable('x-powered-by');
// server.use(bodyParser);
server.use('/api', api_routes);
// server.get('/api', (request, resource) => {
//   resource.json({
//     success: true,
//   });
// });
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR));
// .use(express.static(process.env.RAZZLE_ASSETS_DIR));
server.get('/*', (req, res) => {
  const context = {};
  const markup = renderToString(
    <StaticRouter context={context} location={req.url}>
      <App />
    </StaticRouter>,
  );

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send(
      `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`,
    );
  }
});

export default server;
