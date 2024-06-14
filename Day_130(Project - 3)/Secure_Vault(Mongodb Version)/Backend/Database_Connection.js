import { MongoClient } from "mongodb";

// Database Connection
const url = "mongodb://localhost:27017";
// const url =
//   "mongodb+srv://pritamstech:PS0896721234@learningcluster.v3xrpyk.mongodb.net/";
let client = new MongoClient(url);

await client.connect();
const Database_Name = "SecureVaultDB";
const db = client.db(Database_Name);
console.log("Connected successfully to server");
export default db;
