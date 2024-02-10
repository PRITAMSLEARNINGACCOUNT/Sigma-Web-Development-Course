const Express_Module = require("express");
const PORT = 3000;
const Express_App = Express_Module()
Express_App.use((Request, Response, Next) => {
    console.log("This Is A First Custom Middleware Which Will Repetaedly Run On Every Request.");
    Next();
})
Express_App.use((Request, Response, Next) => {
    console.log("This Is A Second Custom Middleware Which Will Repetaedly Run On Every Request & Along With That It Will Create A Property Which Can Be Used In Every Request.");
    console.log("In This Project I Will Be Demonstrating 'Application-Level Middleware','Built-In Middleware','Error-Handling Middleware' & 'Router-Level Middleware'")
    console.log("Except Above 4 We Can Also Use Third-Party MiddleWares In Express.js By Installing Third-Party Packages Using NPM.");
    Request.Property = "This Is A Property Made By The Custom Middleware.";
    Next();
})


Express_App.get("/", (Request, Response) => {
    Response.send("Hello World\n" + Request.Property);
})
Express_App.get("/About", (Request, Response) => {
    Response.send("Hello WWorld 2\n" + Request.Property);
})
Express_App.listen(PORT, () => {
    console.log("Listening The Server Successfully.");
})