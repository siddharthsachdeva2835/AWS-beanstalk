const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port =   process.env.PORT || 3000

// use express.static() to serve all static files such as images, css and javasrcipt files
// client will call localhost:3000/css/style.css to get a static file
app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', (req,res) => {
    res.sendFile('views/index.html', {root: __dirname})
})

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})