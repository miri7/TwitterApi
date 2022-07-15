const http = require('http');
const app = require('./server')
const {port} = require('./server/config/index')

const hostname = '127.0.0.1';


const server = http.createServer( app);

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando ${port}`);
});