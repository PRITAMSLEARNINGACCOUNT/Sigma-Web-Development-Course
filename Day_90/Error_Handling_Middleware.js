const Express_Module = require("express");
const PORT = 3000;
const Express_App = Express_Module()
Express_App.use((Error, Request, Response, Next) => {
    // console.log("This Is A First Custom Middleware Which Will Repetaedly Run On Every Request.");
    Response.send(Error);
    Response.status(500);
    Next();
})


Express_App.get("/", (Request, Response, Next) => {
    // Response.send("Hello World");
    Next("Nothing Happened Just Testing Out Error Handling Middleware.");
})

Express_App.listen(PORT, () => {
    console.log("Listening The Server Successfully.");
})




