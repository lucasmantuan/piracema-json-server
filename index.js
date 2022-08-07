const jsonserver = require("json-server");
const server = jsonserver.create();
const router = jsonserver.router("db.json");
const middlewares = jsonserver.defaults();
const port = process.env.PORT || 5000;

router.render = (req, res) => {
    res.status(500).jsonp({
        error: "error message here"
    })
}

server.use(middlewares);
server.use(router);
server.listen(port, () => console.log("http://localhost:" + port));