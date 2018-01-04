const http = require('http')
const url = require('url')

const start = (route, handle) => {
    const onRequest = (request, response) => {
        const pathname = url.parse(request.url).pathname
        console.log("Request for " + pathname + " received.")

        route(handle, pathname)

        response.writeHead(200, { 'content-type': 'text/plain' })
        response.write('Hello, world')
        response.end()
    }
    http.createServer(onRequest).listen(8888)
    console.log('server has started')
}

exports.start = start
