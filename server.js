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

// import routes
// const authRoutes = require("./routes/auth");
// const userRoutes = require("./routes/user");
// const categoryRoutes = require("./routes/category");
// const linkRoutes = require("./routes/link");

// middleware
// app.use("/api", authRoutes);
// app.use("/api", userRoutes);
// app.use("/api", categoryRoutes);
// app.use("/api", linkRoutes);

const port = process.env.PORT;

app.listen(port, () => console.log(`API is running on port ${port}`));
