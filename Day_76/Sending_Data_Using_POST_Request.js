let options = {
    method: "POST",
    body: JSON.stringify({
        title: "Hello World",
        body: "This Is A Webpage Body",
        id: 1214,
        userId: 1214,

    }),

    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}

let post_request = fetch("https://jsonplaceholder.typicode.com/posts", options)
post_request.then((response) => {
    return response.json()
}).then((json) => {
    console.log(json)
})


