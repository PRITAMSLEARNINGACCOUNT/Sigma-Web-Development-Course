const Express_Module = require("express");
const PORT = 3000;
const Express_Router = Express_Module.Router()
Express_Router.use((Request, Response, Next) => {
    console.log("This Is A Custom Middleware In Router Which Will Repetaedly Run On Every Request & Along With That It Will Create A Property Which Can Be Used In Every Request.");
    Request.Router = "This Is A Property Made By The Custom Middleware.";
    Next();
})
Express_Router.get("/", (Request, Response) => {
    Response.send("This Is A Basic GET Request");
})
Express_Router.get("/Middleware", (Request, Response) => {
    Response.send(Request.Router)
})
module.exports = Express_Router;