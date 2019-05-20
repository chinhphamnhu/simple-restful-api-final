const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// global properties
global.appRoot = path.resolve(__dirname)
global.appControllers = appRoot + '/controllers'
global.appModels = appRoot + '/models'
global.appRoutes = appRoot + '/routes'

// Body parse json
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json())

// import routes
const apiRouter = require(appRoutes + '/api-router')(app)

app.listen(port)
console.log('Server listening on port: ' + port)