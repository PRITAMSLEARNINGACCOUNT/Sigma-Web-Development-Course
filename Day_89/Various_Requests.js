const Express_Module = require("express");
const PORT = 3000;
const Express_App = Express_Module();
Express_App.post("/POST", (Request, Response) => {

    let object = {
        "Key": "This Is A JSON Formated",
    }
    Response.send(object);
})
Express_App.put("/PUT", (Request, Response) => {
    Response.send("PUT Request Successful.");
})
Express_App.delete("/DELETE", (Request, Response) => {
    Response.send("DELETE Request Successful.");
})
Express_App.get("/", (Request, Response) => {
    Response.send("GET Request Successful.");
})

Express_App.listen(PORT, () => {
    console.log("The Server Is Successfully Running.");
})
