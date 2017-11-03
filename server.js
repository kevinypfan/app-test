const express = require('express')
var app = express()

app.use(express.static('public'))

app.listen(process.env.PORT,() => {
  console.log(`start up ${process.env.PORT}`);
})
