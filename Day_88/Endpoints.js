const Express = require("express");
const Express_App = Express();
const PORT = 3000;

Express_App.get("/", (Request, Response) => {
    Response.send("<h1><b>This Is A Basic GET Request On A Primary Endpoint.</b></h1>");
}
)
Express_App.get("/End_Point_1", (Request, Response) => {
    Response.send("<h1><b>Express Started On First Endpoint After Primary Endpoint</b></h1>");
}
)
Express_App.get("/End_Point_2", (Request, Response) => {
    Response.send("<h1><b>This Is Second Endpoint</b></h1>");
}
)

Express_App.listen(PORT, () => {
    console.log("Your Server Is Successfully Up & Running.");
})