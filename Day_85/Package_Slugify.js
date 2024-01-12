//I Am Installing Nodemon Package Not To Restart A Nodejs Server Again And Again
//Also I Am Installing A Package Named 'Slugify' For Creating Custom URL'S
const Var = require("slugify")
let MyURL = "Hello World"
let URL = Var(MyURL, "A")
console.log(`So My Given URL Is ${MyURL} Which Converted Into Useable URL Which Is ${URL}`)
