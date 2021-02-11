const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      max: 256,
    },
    link: {
      type: String,
      trim: true,
      required: true,
      max: 256,
    },
    date: {
      type: Date,
      required: true,
    },
    about_event: {
      type: String,
      max: 256,
    },
    speakers: {
      type: [],
    },
    mentors: {
      type: [],
    },
    material_resources: {
      type: {},
    },
    joining_info: {
      type: String,
      max: 256,
    },
    organized_by: {
      type: [],
    },
    tags: {
      type: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("event", eventSchema);
