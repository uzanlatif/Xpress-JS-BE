const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

//routes get
app.get('/',(req, res) => {
    res.send('utama!')
})

app.get('/user',(req, res) => {
    const sql = "SELECT * FROM user"

    db.query(sql,(error, result) =>{
        response(200, result, "get all data from user", res)
    })
})

app.get('/find', (req, res) => {
    const namaPt = req.query.nama_pt;
    console.log('find nama_pt: ' + namaPt);

    const sql = 'SELECT nett FROM user WHERE nama_pt = ?';

    db.query(sql, [namaPt], (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Database error' });
        }
        response(200, result, "find user", res);
    });
});


app.post('/login',(req, res) => {
    console.log({ requestFromOutside: req.body})
    res.send('login berhasil')
})

app.post('/signup',(req, res) => {
    console.log({ requestFromOutside: req.body})
    res.send('signup berhasil')
})

app.post('/private',(req, res) => {
    console.log({ requestFromOutside: req.body})
    res.send('signup berhasil')
})

app.put('/username',(req, res) => {
    console.log({ updateData:req.body})
    res.send('update put')
})

app.listen(port,() => {
    console.log('Example app listening on port ${port}')
})