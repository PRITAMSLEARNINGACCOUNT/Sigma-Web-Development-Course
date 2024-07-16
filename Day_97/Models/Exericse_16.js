import mongoose from "mongoose";

let DatabaseSchema = mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean,
});

export const DatabaseModel = mongoose.model("employees", DatabaseSchema);
