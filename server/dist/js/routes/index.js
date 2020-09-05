"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/people/index");
const router = express_1.Router();
router.get("/people", index_1.getPeople);
exports.default = router;
