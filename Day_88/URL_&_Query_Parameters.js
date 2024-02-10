const Express = require("express");
const Express_App = Express();
const PORT = 3000;

Express_App.get("/:URL_Parameter", (Request, Response) => {
    Response.send(`<h1><b>So The URL Parameters Sent To This Endpoint Is ${Request.params.URL_Parameter} And Also The Queries Made On This Endpoint Is " + ${JSON.stringify(Request.query)}.</b></h1>`);
}
)


Express_App.listen(PORT, () => {
    console.log("Your Server Is Successfully Up & Running.");
})