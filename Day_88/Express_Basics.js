const Express = require("express");
const Express_App = Express();
const PORT = 3000;
Express_App.get("/", (Request, Response) => {
    Response.send("<h1><b>Express Started</b></h1>");
}
)
Express_App.listen(PORT, () => {
    console.log("Your Server Is Successfully Up & Running.");
})