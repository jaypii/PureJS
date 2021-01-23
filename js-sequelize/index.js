const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

// API ENDPOINTS

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

// dependencies
const { Campus } = require('./sequelize')

// create a campus
app.post('/api/campus', (req, res) => {
  Campus.create(req.body)
      .then(campus => res.json(campus))
})
// get all campus's
app.get('/api/campus', (req, res) => {
  Campus.findAll().then(campus => res.json(campus))
})
