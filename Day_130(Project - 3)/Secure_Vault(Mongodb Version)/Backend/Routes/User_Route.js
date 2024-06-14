import { Router } from "express";
const app = Router();
import Database from "../Database_Connection.js";
import JWT from "jsonwebtoken";
import { config } from "dotenv";
import Bcrypt from "bcryptjs";
config();
const collection = Database.collection("UserCollection");
// Defining Different EndPoints For Users
// app.get("/", (req, res) => {
//   res.send("GET USER");
// });

app.post("/Create", async (req, res) => {
  try {
    const Query = await collection.findOne({ Username: req.body.Username });
    const Query_2 = await collection.findOne({ Email: req.body.Email });
    console.log(Query);
    if (Query) {
      res.status(500).json({
        message: "Username Already Exist",
      });
    } else if (Query_2) {
      res.status(500).json({
        message: "Email ID Already Exist",
      });
    } else {
      res.send(
        await collection.insertOne({
          ...req.body,
          ["Password"]: Bcrypt.hashSync(req.body.Password, 10),
        })
      );
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

app.post("/Login", async (req, res) => {
  try {
    const Query_Result = await collection.findOne({
      Username: req.body.Username,
    });

    if (Bcrypt.compareSync(req.body.Password, Query_Result.Password)) {
      let JWT_Token = await JWT.sign(
        JSON.stringify({
          ID: Query_Result._id,
          Username: req.body.Username,
        }),
        process.env.JWT_SECRET
      );
      res.json({ Token: JWT_Token });
    } else {
      res.status(500).json({ Message: "Wrong Password" });
    }
  } catch (error) {
    res.status(200).json({ Message: "User Doesn't Exist" });
  }
});

export { app, collection };
