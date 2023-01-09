const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares)
server.use(jsonServer.rewriter({ "/api/antenas": "/antenas", "/api/peixes": "/peixes", "/api/passagens": "/passagens" }))
server.use(router)
server.listen(port, () => { console.log("JSON Server is running") })

module.exports = server