console.log("I Am Fetching Some Data's From A Free API Service Named 'NewsAPI' And Printing Different Value Of It.")

let get_request = fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-12-19&sortBy=publishedAt&apiKey=cf7fec402fd1484c9d2561c5a2ac1b94")
get_request.then((response) => {
    return response.json()
}).then((final_value) => {
    console.log("I Am Printing One Article Fetched Using 'GET' Request On That Free API Service ")
    console.log(final_value.articles[0])
})
console.log("So This Is Just A Simple Demonstration Of 'GET' Request And Fetch API.")