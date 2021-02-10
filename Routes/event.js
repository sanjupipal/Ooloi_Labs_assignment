const express = require("express");

const router = express.Router();

const { create, read, update, remove } = require("../Controller/event");

//routes
router.post("/event", create);
router.get("/event", read);
router.put("/event", update);
router.delete("/event", remove);

module.exports = router;
