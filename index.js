import express from "express";
import axios from "axios";

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Any questions text me RobinSuthar (Teams)

app.get("/", async (req, res) => {
  try {
    // Placeholder for extracting information from the front-end
    const response = await axios.get("//Link provided into the channel");
    res.json({ message: response.data });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching data from the provided link" });
  }
});

app.post("/", async (req, res) => {
  try {
    // Extract user input from request body
    const userInput = req.body;

    const options = {
      method: "POST",
      url: "https://ai-medical-diagnosis-api-symptoms-to-results.p.rapidapi.com/analyzeSymptomsAndDiagnose",
      params: { noqueue: "1" },
      headers: {
        "x-rapidapi-key": "b37e7d5285msh4f70eac66c59bf7p1d787ejsn892396d79404",
        "x-rapidapi-host":
          "ai-medical-diagnosis-api-symptoms-to-results.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: userInput, // Send the user-provided data to the API
    };

    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch diagnosis results" });
  }
});

app.listen(3002, () => {
  console.log("Backend Listening on port 3001");
});

app.listen(3001, function () {
  console.log("Backend Listening on port");
});
