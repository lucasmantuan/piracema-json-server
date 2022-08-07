var jsonServer = require("json-server");
// var db = require("./db.js");
var server = jsonServer.create();
var router = jsonServer.router("db.json");
var middlewares = jsonServer.defaults();
var port = process.env.PORT || 5000;
server.use(middlewares);
server.use(router);
server.listen(port, function () {
    console.log("JSON Server is running on http://localhost:" + port);
});
