const Express_Module = require("express");
const PORT = 3000;
const Express_App = Express_Module();
const Route_1 = require("./Routes/Route_1");
const Route_2 = require("./Routes/Route_2");
Express_App.use("/Hello", Route_1);
Express_App.use("/World", Route_2);
Express_App.use(Express_Module.static("Static_Files"));
Express_App.get("/", (Request, Response) => {
    Response.sendFile("Static_Files/Basic_HTML.html", { root: __dirname });
})
Express_App.listen(PORT, () => {
    console.log("Listening The Server Successfully.");
})