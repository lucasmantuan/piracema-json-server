var express = require('express');

const jsonServer = require('json-server');

var server = express();
server.use('/api', jsonServer.defaults()); 
server.use('/api', jsonServer.router('db.json'));

// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

// server.use(middlewares);
// server.use(router);
server.listen(port);