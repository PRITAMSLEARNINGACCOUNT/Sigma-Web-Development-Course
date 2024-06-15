import JWT from "jsonwebtoken";
import { collection } from "./Routes/User_Route.js";
import { config } from "dotenv";
config();
const Authorization = async (Request, Response, Next) => {
  try {
    let USER = JWT.verify(Request.headers.token, process.env.JWT_SECRET);

    let Result = await collection.findOne({ Username: USER.Username });
    if (Result === undefined) {
      return Response.status(500).json({ Error: "Internal Server Error" });
    } else if (Result === null) {
      return Response.status(500).json({ Error: "Internal Server Error" });
    } else {
      Request.Username = Result.Username;
    }
    Next();
  } catch (error) {
    return Response.status(500).json({ Error: "Internal Server Error" });
  }
};
export default Authorization;
