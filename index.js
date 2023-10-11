"use strict";
const express = require("express");
const request = require("request-promise");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

// routes
const textRoutes = require("./routes/text.js");

// app init
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
  const apiKey = req.get("x-rapidapi-private-key");
  if (!apiKey || apiKey !== process.env.API_KEY) {
    res.status(401).json({ error: "Unauthorized" });
  } else {
    next();
  }
});

// GET -root
app.get("/", (req, res) => {
  const title = "Welcome to TextNert API.";
  const description = "Pretty Simple Case Converter v1.0.";
  try {
    const response = {
      title: title,
      description: description,
    };
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

// using text routes
app.use("/api", textRoutes);
app.use("/api/v1.0", textRoutes);
app.use("/api/v1", textRoutes);

// run server
app.listen(PORT, () => console.log(`Server running at ${PORT}`));
