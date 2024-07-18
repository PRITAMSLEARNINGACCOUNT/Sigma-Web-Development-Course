const express = require('express')
const app = express()
const blog = require('./Spotify-API-Test-Project.css')
const shop = require('./Spotify-API-Test-Project')



const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.sendFile("Spotify-API-Test-Project.html", { root: __dirname })
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact me!')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})