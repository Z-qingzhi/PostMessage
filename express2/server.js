const express = require('express')
const path = require('path')
const app = express()
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var cookieParser = require("cookie-parser");


app.use(express.static(path.join(__dirname, 'views')))
app.use(cookieParser());




app.listen(4000, () => {
  console.log(`App listening at port 4000`)
})