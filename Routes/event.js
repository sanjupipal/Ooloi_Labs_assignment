const express = require("express");

const router = express.Router();

// validators
const {
  eventCreateValidator,
  eventUpdateValidator,
} = require("../validator/event");

//middleware
const { runValidation } = require("../validator/index");

// function
const { create, read, update, remove } = require("../Controller/event");

//routes
router.post("/event", eventCreateValidator, runValidation, create);
router.get("/event", read);
router.put("/event/:id", update);
router.delete("/event/:id", remove);

module.exports = router;
