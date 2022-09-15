const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const db = require('./queries.js')
const port = 3000
const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.post('/draw', db.createPolygon)

app.listen(port, ()=> console.log(`running at port ${port}!`))
