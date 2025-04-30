// filepath: c:\Users\Usuario\Desktop\Cursoz\Alura\Memoteca\server.js
const jsonServer = require('json-server');
const cors = require('./cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});