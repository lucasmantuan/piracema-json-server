const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

const cors = require("cors");

server.use(middlewares);
server.use(router);

server.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
);
server.options("*", cors());

server.listen(port, () => console.log("JSON Server is running in http://localhost:" + port));