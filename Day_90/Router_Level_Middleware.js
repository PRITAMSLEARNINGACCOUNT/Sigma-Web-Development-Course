const Express_Module = require("express");
const PORT = 3000;
const Express_App = Express_Module();
const Route = require("./Route/Route_1");

Express_App.use("/Router", Route);
Express_App.get("/", (Request, Response) => {
    Response.send("Hello World");
})
Express_App.get("/About", (Request, Response) => {
    Response.send("Hello Beautiful World.");
})
Express_App.listen(PORT, () => {
    console.log("Listening The Server Successfully.");
})