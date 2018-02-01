const express = require('express')
const middleware = require('./middleware')
const {port} = require('./config')
const app = express()
middleware(app)
app.listen(port, '127.0.0.1', err => {
  if (err) return console.log('出错了', err)
  console.log('调动成功: http://127.0.0.1:3000')
})
