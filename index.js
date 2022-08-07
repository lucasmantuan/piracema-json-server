const jsonserver = require("json-server");
const server = jsonserver.create();
const router = jsonserver.router("db.json");
const middlewares = jsonserver.defaults();
const port = process.env.PORT || 5000;
server.use(middlewares);
server.use(router);
server.listen(port, () => console.log("http://localhost:" + port));