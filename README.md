# AWS-beanstalk

This is a guide to deploy a nodejs application on aws using elastic beanstalk and connecting the deployed application to the database.

## Setup Elastic beanstalk environment

 - Open the Elastic Beanstalk console.
 - From the Actions menu in the upper right corner, choose Create new application.
 - Enter the name of your application and choose create.
 - Once the application is created, choose **create one now** to add a new environment.
 - choose **web server environment** and press select.
 - select **node.js** as preconfigured plateform and press create environment.

## Deploying the node application to Elastic Beanstalk

 - Open your application and select the environment that you created above.
 - Choose **Upload and deploy** and upload a zip file containing a node.js project.
 - In our case, zip all the files inside the cloned folder and upload it.

## Using Amazon RDS Database

### Adding a Database instance to your environment

 - Open the Elastic Beanstalk console.
 - Navigate to the management page for your environment.
 - Choose Configuration.
 - On the Database configuration card, choose Modify.
 - Choose a DB engine, and enter a user name and password.
 - In our case, we will choose mysql as the DB engine.
 - Choose Apply.

### Adding data to the database (mysql)

 - Install MySQL workbench
 - Open MySQL workbench, go to database tab on the top and choose connect to database.
 - Enter you RDS DB endpoint as the hostname.
 - Enter your DB username and password and choose **ok**.
 - Now you can add schema and tables to your database.

 Note: you must open the mysql port by adding inbound rule to the security group attached with your database. 

## Connect node application with RDS database

You need to install a npm package to connect and query your database from the node application. Run the following command:

````bash
npm install mysql --save
````

Use the following code to connect to the database using **mysql**.

````bash
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : process.env.RDS_HOSTNAME,
    user     : process.env.RDS_USERNAME,
    password : process.env.RDS_PASSWORD,
    port     : process.env.RDS_PORT
});
 
connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.');
});

connection.end();
````

Use the **query** function to query into the database:

````bash
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
````


