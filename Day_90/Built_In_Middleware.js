const Express_Module = require("express");
const PORT = 3000;
const Express_App = Express_Module()
Express_App.use(Express_Module.static("Static_Files"))



Express_App.get("/", (Request, Response) => {
    console.log("Serving Static Files Using Built-In Middlewares.")
    Response.sendFile("Static_Files/Static.html", { root: __dirname });
})



Express_App.listen(PORT, () => {
    console.log("Listening The Server Successfully.");
})