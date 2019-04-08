# AWS-beanstalk

This is a guide to deploy a nodejs application on aws using elastic beanstalk and connecting the deployed application to the database.

# Setup Elastic beanstalk environment

 - Open the Elastic Beanstalk console.
 - From the Actions menu in the upper right corner, choose Create new application.
 - Enter the name of your application and choose create.
 - Once the application is created, choose **create one now** to add a new environment.
 - choose **web server environment** and press select.
 - select **node.js** as preconfigured plateform and press create environment.

# Deploying the node application to Elastic Beanstalk

 - Open your application and select the environment that you created above.
 - Choose **Upload and deploy** and upload a zip file containing a node.js project.
 - In our case, zip all the files inside the cloned folder and upload it.




