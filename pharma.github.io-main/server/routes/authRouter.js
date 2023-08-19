const express = require("express");
const {loginController, registerController} = require("../controllers");
const router = require("express").Router();

router.post("/login", loginController);
router.post("/register", registerController);

module.exports = router;
