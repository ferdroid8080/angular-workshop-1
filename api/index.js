const express = require("express");
const app = express();
const port = 3000;

const habitsJson = require("./habits.json");

app.get("/api/habits", (req, res) => {
  return res.json(habitsJson.habits);
});

app.post("/api/habits", (req, res) => {
  const { title } = req.body;
  const id = habitsJson.habits.length + 1;
  const newHabit = {
    id,
    title,
  };
  habitsJson.habits.push(newHabit);
  return res.json({
    message: "Habit created successfully",
    habit: newHabit,
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
