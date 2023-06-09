const express = require('express')
const next = require('next')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const routes = require('./routes.js')
const socketIO = require('./socket.js')


dotenv.config();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.json());
    server.use('/', routes);

    server.get('/test-route', (req, res) => {
      return res.end('Success')
    })

    server.get("*", (req, res) => {
      return handle(req, res);
    })

    const httpServer = server.listen(PORT, err => {
      if(err) throw err;
      console.log(`Ready On ${PORT}`)
    })

    socketIO(httpServer);
  })
  .catch(ex => {
    console.error(ex.stack);
  })

