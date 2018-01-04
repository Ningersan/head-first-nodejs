const server = require('./server')
const router = require('./router')
const requestHandles = require('./requestHandles')

const handles = {}
handles['/'] = requestHandles.start
handles['/start'] = requestHandles.start
handles['/upload'] = requestHandles.upload

server.start(router.route, handles)