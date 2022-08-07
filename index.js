const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(middlewares);

server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Credentials", true)
    // res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT")
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version")
    next();
});

server.use(router);
server.listen(port, () => console.log("JSON Server is running in http://localhost:" + port));