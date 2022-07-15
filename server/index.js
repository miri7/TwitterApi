const express = require('express')
const app = express()



app.get('/', (req, res) => {
  res.json({
    message:'hola mundo'
  })
})

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