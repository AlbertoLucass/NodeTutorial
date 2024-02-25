const http = require('http')

const server = http.createServer((req, res) =>{
    res.write("Hello World")
    res.end()
})

server.listen(5000) // This will listen to port 3000