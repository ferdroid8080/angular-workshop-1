const express = require("express");
const app = express();
const port = 3000;

const habitsJson = require("./habits.json");

app.get("/api/habits", (req, res) => {
  return res.json(habitsJson.habits);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
