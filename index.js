const http = require('http')
const server = http.createServer((req, res) => {
    HTMLFormControlsCollection.log(req.url)
    res.end('Hello Node.js')
})
server.listen(3000)