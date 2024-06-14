import express from "express";
// import Database from "./Database_Connection.js";
import CORS from "cors";
import { app as User_Auth } from "./Routes/User_Route.js";
import Password from "./Routes/Password_Route.js";
const app = express();

const port = 3000;
// const Database_Name = "SecureVaultDB";
// const db = Database.db(Database_Name);
// const collection = db.collection("SecureVaultCollection");

// Using Middlewares

app.use(CORS());
app.use(express.json());
app.use("/auth", User_Auth);
app.use("/Password", Password);

// Express APP Is Running And UP

app.listen(port, () => {
  console.log(`SecureVault Backend listening on port ${port}`);
});
