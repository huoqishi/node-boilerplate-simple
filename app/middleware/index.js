const path = require('path')
const {static: $static} = require('express')
const {json} = require('body-parser')
function resolve (p) {
  return path.resovle(__dirname, p)
}
module.exports = app => {
  app.use($static(resolve('../../public')))
  app.use($static(resolve('../uploads')))
  app.use(json())
}
