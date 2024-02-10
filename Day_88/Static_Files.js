const Express = require("express");
const Path_Module = require("path");
const PORT = 3000;
const Express_App = Express();
Express_App.use(Express.static("Static_Files"));

Express_App.get("/", (Request, Response) => {
    Response.sendFile(Path_Module.join(__dirname, "Static_Files/Static.html"));
})
Express_App.listen(PORT, () => {
    console.log("Your App Is Running Like A Wow");
})