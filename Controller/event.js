const Event = require("../Model/event");

exports.create = async (req, res) => {
  const {
    title,
    link,
    date,
    about_event,
    speakers,
    mentors,
    material_resources,
    joining_info,
    organized_by,
    tags,
  } = req.body;

  const newEvent = new Event({
    title,
    link,
    date,
  });

  if (about_event) newEvent.about_event = about_event;
  if (speakers) newEvent.speakers = speakers;
  if (mentors) newEvent.mentors = mentors;
  if (material_resources) newEvent.material_resources = material_resources;
  if (joining_info) newEvent.joining_info = joining_info;
  if (organized_by) newEvent.organized_by = organized_by;
  if (tags) newEvent.tags = tags;

  try {
    let oldEvent = await Event.findOne({ title });

    if (oldEvent) {
      return res.status(400).json({ msg: "Event name already taken" });
    }
    const event = await newEvent.save();
    res.json(event);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.read = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.update = async (req, res) => {
  const {
    title,
    link,
    date,
    about_event,
    speakers,
    mentors,
    material_resources,
    joining_info,
    organized_by,
    tags,
  } = req.body;
  const { id } = req.params;
  Event.findByIdAndUpdate(
    { _id: id },
    {
      title,
      link,
      date,
      about_event,
      speakers,
      mentors,
      material_resources,
      joining_info,
      organized_by,
      tags,
    },
    { new: true }
  ).exec((err, updated) => {
    if (err) {
      return res.status(400).json({
        error: "could not find event to update",
      });
    }
    res.json(updated);
  });
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  try {
    await Event.findByIdAndDelete({ _id: id }).exec((err, event) => {
      if (err) {
        return res.status(400).json({
          error: "could not find event to delete",
        });
      } else {
        res.json({ msg: "Event deleted successfully" });
      }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
