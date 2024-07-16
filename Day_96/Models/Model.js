import mongoose from "mongoose";

let Database_Schema = mongoose.Schema({
  Name: { type: String, required: true },
  Student_Code: String,
  Student_Phone_Number: Number,
  IsAdmitted: Boolean,
});

export const DatabaseModel = mongoose.model("Student_Model", Database_Schema);
