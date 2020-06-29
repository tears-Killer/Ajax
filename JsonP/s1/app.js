const expess = require('express')

const app = expess()

const path = require('path')
//向其他服务端请求数据
const request = require('request')

app.use(expess.static(path.join(__dirname, 'public')))

app.get('/test', (req, res) => [
    request('http://localhost:3001/test2', (err, response, body) => {
        console.log(err);
        
        console.log(body);
        res.send('ok')
    })
])

app.listen(3000)
console.log('服务器1已开启');
