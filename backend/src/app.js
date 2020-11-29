"use strict";
exports.__esModule = true;
var express_1 = require("express");
var links_1 = require("./routes/links");
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(links_1["default"]);
exports["default"] = app;
