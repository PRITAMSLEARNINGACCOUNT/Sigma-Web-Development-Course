import { MongoClient } from "mongodb";
import { config } from "dotenv";

// Database Connection

config();
const url = process.env.MONGO_URI;
let client = new MongoClient(url);

await client.connect();
const Database_Name = "SecureVaultDB";
const db = client.db(Database_Name);
console.log("Connected successfully to Mongodb");
export default db;
