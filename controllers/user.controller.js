const express = require("express");

const User = require("../models/user.model");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("/", crudController(User).post);

router.get("/", crudController(User).get);
router.get("/:id", crudController(User).getOne);

module.exports = router;
