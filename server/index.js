const express = require('express')
const path = require('path')
const app = express()

app.use('/css', express.static(path.join(__dirname, 'client/style.css')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/style.css'))
})



const server = process.env.PORT || 4000
app.listen(server, () => console.log(`Sever running on ${server}`))