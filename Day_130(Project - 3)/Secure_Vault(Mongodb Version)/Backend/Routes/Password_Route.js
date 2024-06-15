import { Router } from "express";
const app = Router();
import JWT_Middleware from "../JWT_Middleware.js";
import Database from "../Database_Connection.js";
import { ObjectId } from "mongodb";
const collection = Database.collection("PassCollection");

// Defining Different EndPoints For Passwords

app.get("/", JWT_Middleware, async (req, res) => {
  // res.send("GET ALL PASSWORDS");
  try {
    let result = await collection.find({ Username: req.Username }).toArray();
    if (result.length !== 0) {
      return res.send(result);
    } else {
      throw Error("Nothing Founded");
    }
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
});
app.post("/", JWT_Middleware, async (req, res) => {
  // res.send("CREATE A PASSWORD");
  try {
    res.json(
      await collection.insertOne({ ...req.body, ["Username"]: req.Username })
    );
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
});

app.delete("/", JWT_Middleware, async (req, res) => {
  // res.send("DELETE A PASSWORD");
  try {
    res.json(
      await collection.findOneAndDelete({ _id: new ObjectId(req.body._id) })
    );
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
});

export default app;
