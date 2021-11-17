const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})




const server = process.env.PORT || 4000
app.listen(server, () => console.log(`Sever running on ${server}`))