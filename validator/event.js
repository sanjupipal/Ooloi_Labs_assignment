const { check } = require("express-validator");

exports.eventCreateValidator = [
  check("title").not().isEmpty().withMessage("Event Name is required"),
  check("link").not().isEmpty().withMessage("Registration link is required"),
  check("date").not().isEmpty().withMessage("Event date is required"),
];
