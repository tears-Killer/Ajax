const expess = require('express')

const app = expess()

const path = require('path')

app.use(expess.static(path.join(__dirname, 'public')))

app.get('/test', (req, res) => {
    var result = 'fn({name:"wj"})'
    res.send(result)
})
app.get('/test1', (req, res) => {
    res.jsonp({ name: 'wj' })
})

app.get('/test2', (req, res) => {
    res.send('ok')
})
app.listen(3001)
console.log('服务器2已开启');