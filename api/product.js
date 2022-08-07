const express = require("express");
const router = express.Router();

// const server = express();
const jsonserver = require('json-server');

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.use('/', jsonserver.defaults());
router.use('/', jsonserver.router('db.json'));

// router.get("/", () => {

//     // try {
//     //     res.json({
//     //         status: 200,
//     //         message: "Get data has successfully",
//     //     });
//     // } catch (error) {
//     //     console.error(error);
//     //     return res.status(500).send("Server error");
//     // }
// });

module.exports = router;