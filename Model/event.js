const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      max: 256,
    },
    url: {
      type: String,
      trim: true,
      required: true,
      max: 256,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    about_event: {
      type: String,
      max: 256,
    },
    speakers: [
      {
        name: {
          type: String,
        },
        info: {
          type: String,
        },
        pic: {
          type: String,
        },
      },
    ],
    mentors: [
      {
        name: {
          type: String,
        },
        info: {
          type: String,
        },
        pis: {
          type: String,
        },
      },
    ],
    material_resources: {
      type: {},
    },
    joining_info: {
      type: String,
      max: 256,
    },
    organized_by: {
      type: ObjectId,
      ref: "user",
    },
    tags: [
      {
        type: ObjectId,
        ref: "tags",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("event", eventSchema);
