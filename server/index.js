const express = require('express')
const app = express()
const api = require('./api/v1')


app.use('/api', api)
app.use('/api/v1',api)

// hablar de rutas

app.use((req,res,next)=>{
  next({
    statusCode:404,
    message:'route not found'
  })
})

app.use((err,req,res,next)=>{
  const {statusCode = 500 , message = ''} = err
  res.status(statusCode);
  res.json({
    message, 
  })
  
})


module.exports = app;