const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

//db
mongoose
  .connect(process.env.DATABASE_CLOUD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.json({ limit: "5mb", type: "application/json" }));

// import routes
const eventRoutes = require("./Routes/event");

// middleware
app.use("/api", eventRoutes);

const port = process.env.PORT;

app.listen(port, () => console.log(`API is running on port ${port}`));
