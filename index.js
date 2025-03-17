import express from "express";
import axios from "axios";
const app = express();
app.get("/", function (req, res) {
  //This is a get pint to extract informrtion from fron-end
  //read the docs from privide link and get result here
  const data = axios.get("//Link provided into the channgel");

  res.json({
    message: data,
  });
});

app.post("/", function (req, res) {
  //This is a back-end route where will
  //hit the req.body and expract information
  //from the user which will be typed in out form
  //from fron-end and we will send it to api end point

  const result = req.body;

  res.json({
    message: "Wokring on the logix",
  });
});

app.listen(3001, function () {
  console.log("Backend Listening on port");
});
