import express from 'express'
import bodyParser from 'body-parser'

const app = express()

// Middleware
app.use(bodyParser)

// Routes
app.get('/', (req, res) => res.json({ foo: 'bar' }))

module.exports = app
