const Express_Module = require("express");
const PORT = 3000;
const Express_App = Express_Module();
Express_App.use(Express_Module.static('Static_Files'));
Express_App.get("/", (Request, Response) => {
    console.log("So In The Way I Demonstrated In This Program I Can Serve Files Using Express In This Way.");
    Response.sendFile("Static_Files/Basic_HTML.html", { root: __dirname });
})

Express_App.listen(PORT, () => {
    console.log("The Server Is Successfully Running.");
})