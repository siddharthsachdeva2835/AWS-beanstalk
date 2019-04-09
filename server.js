const express = require('express')
const bodyParser = require('body-parser')
const mysql =  require('mysql')
const app = express()
const port =   process.env.PORT || 3000

// use express.static() to serve all static files such as images, css and javasrcipt files
// client will call localhost:3000/css/style.css to get a static file
app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

const connection = mysql.createConnection({
    host     : process.env.RDS_HOSTNAME,
    user     : process.env.RDS_USERNAME,
    password : process.env.RDS_PASSWORD,
    port     : process.env.RDS_PORT
})

connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.');
});
  


app.get('/', (req,res) => {
    connection.query('SELECT * FROM user.login', function (error, results, fields) {
        if (error) throw error
        
        res.render('index', { name: results[0].name})
    });
})

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})