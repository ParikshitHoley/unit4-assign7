const express = require("express");

const Student = require("../models/student.model");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("/", crudController(Student).post);

router.get("/", crudController(Student).get);
router.get("/:id", crudController(Student).getOne);

module.exports = router;
