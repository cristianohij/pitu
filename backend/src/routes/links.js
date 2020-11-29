"use strict";
exports.__esModule = true;
var express_1 = require("express");
// constroi uma rota
var router = express_1.Router();
router.post('/links', function (req, res) {
    res.send('POST');
});
router.get('/links/:code', function (req, res) {
    res.send('GET');
});
router.get('/links/:code/stats', function (req, res) {
    res.send('GET stats');
});
exports["default"] = router;
