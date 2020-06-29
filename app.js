const express = require('express')

const app = express()

const path = require('path')

const bodyParser = require('body-parser')

const formidable = require('formidable')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/first', (req, res) => {
    res.send('hello ajax')
})

app.get('/jsonData', (req, res) => {
    res.send({ name: 'wj' })
})

app.get('/transform', (req, res) => {
    res.send(req.query)
})

app.post('/post', (req, res) => {
    res.send(req.body)
})

app.use('/json',(req,res) => {
    res.send(req.body)
})

app.use('/readyState',(req,res) => {
    res.send('hello')
})

app.get('/error',(req,res) => {
    res.status(400).send('not ok')
})

app.post('/formData',(req,res) => {
    const form = new formidable.IncomingForm()
    form.parse(req,(err,fields,files) => {
        res.send(fields)
    })
})
app.listen(80)
console.log('服务器已开启');
