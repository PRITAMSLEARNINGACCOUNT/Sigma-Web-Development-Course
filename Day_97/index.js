import express from "express";
import mongoose, { Model } from "mongoose";
import cors from "cors";
import { DatabaseModel } from "./Models/Exericse_16.js";
const app = express();
const port = 3000;
await mongoose.connect("mongodb://localhost:27017/company");
const CityArray = [
  "San Francisco",
  "Miami",
  "Dallas",
  "Seattle",
  "Denver",
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
];
const NameArray = [
  "Frank",
  "Grace",
  "Hannah",
  "Ivy",
  "Jack",
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
];
const BooleanArray = [true, false];
const LanguageArray = [
  "Go",
  "Swift",
  "Kotlin",
  "PHP",
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "Ruby",
];
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/SaveData", async (req, res) => {
  await DatabaseModel.deleteMany({});
  for (let index = 0; index < NameArray.length; index++) {
    await new DatabaseModel({
      name: NameArray[Math.floor(Math.random() * 10)],
      salary: Math.floor(Math.random() * 99000000),
      language: LanguageArray[Math.floor(Math.random() * 10)],
      city: CityArray[Math.floor(Math.random() * 10)],
      isManager: BooleanArray[Math.floor(Math.random() * 2)],
    }).save();
  }
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Express App Is Running At http://localhost:${port}`);
});
