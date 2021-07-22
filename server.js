import express from "express";
import mongoose from "mongoose";
import Cors from "cors";

import Data from "./data.js";
import Videos from "./dbModel.js";

// App config
const app = express();
const port = process.env.PORT || 9000;

// Middlewares
// It will pass the response as a json object
app.use(express.json());
app.use(Cors());

// DB config
const connection_url =
  "mongodb+srv://admin:I4lXnlUF55upI9lm@cluster0.w9bne.mongodb.net/tiktokdb?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API endpoints
app.get("/", (req, res) => res.status(200).send("Hello World it is Tiktok"));

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts/", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  // POST request to add data to database
  // It will let us add a video DOCUMENT to the videos COLLECTION
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
