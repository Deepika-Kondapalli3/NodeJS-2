const express = require('express')
const addDays = require('date-fns/addDays')
const app = express()

app.get('/', (request, response) => {
  const datee = new Date()
  const result = addDays(
    new Date(datee.getFullYear(), datee.getMonth(), datee.getFulldate()),
    100,
  )
  response.send(
    '${result.getDate()}/${result.getMonth()+1}/${result.getFullYear()}',
  )
})
module.exports = app
