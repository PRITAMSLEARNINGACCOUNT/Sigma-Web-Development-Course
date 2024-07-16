import mongoose from "mongoose";
import express from "express";
import { DatabaseModel } from "./Models/Model.js";

const ExpressApp = express();
const PORT = 3000;
await mongoose.connect("mongodb://localhost:27017/Day_96");

ExpressApp.get("/", async (Request, Response) => {
  const Obj = new DatabaseModel({
    Student_Phone_Number: 974897041,
    Student_Code: "BWU/BCA/23/152",
    IsAdmitted: false,
    Name: "PRITAMSTECH",
  }).save();
  await Obj.save();
  Response.send("Endpoint Is Working Absolutely Fine");
});
ExpressApp.get("/Find", async (Request, Response) => {
  const Result = await DatabaseModel.findOne({
    Student_Code: "BWU/BCA/23/152",
  });
  //   Response.send(JSON.stringify(Result));
  Response.json({
    Student_Phone_Number: Result.Student_Phone_Number,
    Student_Code: Result.Student_Code,
    IsAdmitted: Result.IsAdmitted,
    Name: Result.Name,
  });
});

ExpressApp.listen(PORT, () => {
  console.log(`Express App Is Running On http://localhost:${PORT}`);
});
