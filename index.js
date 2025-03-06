const express = require('express')
const app = express()
const port = 3000

//routes get
app.get('/',(req,res) => {
    res.send('utama')
})

app.get('/hello',(req,res) => {
    res.send('Hello panda!')
})

app.get('/response',(request,response) => {
    response.send('response!')
})

app.listen(port,() => {
    console.log('Example app listening on port ${port}')
})