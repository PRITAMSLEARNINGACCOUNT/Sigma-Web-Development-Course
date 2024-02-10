const Express_Module = require("express");
const PORT = 3000;
const Express_App = Express_Module.Router();
Express_App.use(Express_Module.static("Static_Files"));

Express_App.get("/Route_2", (Request, Response) => {

    Response.sendFile("Static_Files/Route_2.html", { root: __dirname.slice(0, __dirname.length - 7) });
})
module.exports = Express_App