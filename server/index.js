
const express = require('express')
const next = require('next')


//const handle = routes.getRequestHandler(app)
const bodyParser=require('body-parser');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const tollsRoutes=require('./routes/tolls')
app.prepare()
.then(()=>{
    const server=express();
    server.use(bodyParser.json())
    /////////// endpoints/////////
    server.use('/readAndShowTolls',tollsRoutes)
    

    /////////// endpoints/////////
    server.get("*",(req,res)=>{
        return handle(req,res)
    })
    //para manejar peticiones api

    //server.use(handle).listen(3000, (err) => {
    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
      })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })