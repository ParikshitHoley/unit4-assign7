const express = require("express");

const Batch = require("../models/batch.model");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("/", crudController(Batch).post);

router.get("/", crudController(Batch).get);
router.get("/:id", crudController(Batch).getOne);

module.exports = router;
