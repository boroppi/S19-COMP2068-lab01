const express = require("express");
const path = require("path");

const app = express();

// views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// routes
const routes = require("./routes");
app.use("/", routes);

const port = process.env.PORT || 4000;

app.listen(process.env.PORT || 4000, () =>
  console.log(`Listening on port ${port}...`)
);
