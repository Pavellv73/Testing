const { Nuxt, Builder } = require('nuxt');
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express')();
const config = require('../nuxt.config.js');
// const consola = require('consola');

let server;

if (process.env.NODE_ENV !== 'production') {
  const privateKey = fs.readFileSync('key.pem', 'utf8');
  const certificate = fs.readFileSync('cert.pem', 'utf8');
  const httpsOptions = {
    key: privateKey,
    cert: certificate,
  };
  server = https.createServer(httpsOptions, express);
} else {
  server = http.createServer(express);
}

const nuxt = new Nuxt(config);

express.use(nuxt.render);

function listen() {
  server.listen('3000', '0.0.0.0');
}

if (process.env.NODE_ENV !== 'production') {
  new Builder(nuxt)
    .build()
    .then(listen)
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
} else {
  listen();
}
