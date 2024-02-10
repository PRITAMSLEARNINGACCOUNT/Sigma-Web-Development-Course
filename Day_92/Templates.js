const express = require("express");
const PORT = 3000;
const express_app = express();
express_app.use((Response, Request, Next) => {
    console.log("This Express Js Will Render EJS Files Along With Partials.")
    Next();
})
express_app.set("view engine", "ejs");

express_app.get("/", (Request, Response) => {
    Response.render("EJS", { "sitename": "My Portfolio", "body": "This Is A Body Generated Using EJS Templates Using Express." });
})
express_app.get("/EJS", (Request, Response) => {
    Response.render("Partials");
})
express_app.listen(PORT, () => {
    console.log("Listening To The Server Successfully.");
})