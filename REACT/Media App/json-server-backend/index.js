//import  json-server in index.js file

const jsonServer = require('json-server')

//create a server for json file

const mediaPlayerServer = jsonServer.create()

//set up a path for json file

const router = jsonServer.router('db.json')

//return a middleware used by json server

const middlewares = jsonServer.defaults()

//set up port for running json server

const port = 4000 || process.env.port

// use middlewares and  router in server

mediaPlayerServer.use(middlewares)
mediaPlayerServer.use(router)

//to Listern server for resolving request from server

mediaPlayerServer.listen(port,()=>{
    console.log(`mediaplayer listerning at port${port},and waiting for the client request !!!`);
})