# e-commerce

## Description
This application is a backend application servicing front end routes and using MySQL databas Technologies Usede with Node.Js, Express, Sequelize and dotenv.

## Technologies Used
This application is powered by Node.js (v16.19.1), Express.js, JavaScript, MySQL, and Sequelize (ORM). It utilizes the node package manager (npm) dependencies sequelize, mysql2, express, and dotenv.. Also, the Insomnia application was utilized to test the functionality of routes within the program.

## 
Part 1 and 2 of e-commerce challenge criteria:
https://drive.google.com/file/d/1-9yquSAYPwz_zdONeJeOyD7T-M0m68Bm/view

Part 3 of e-commerce criteria: 


## Installation
Open in VS Code. If you do not have VS code you must install it.

Using the terminal, install node.js. Should already be installed. 

Once node.js is installed, in the terminal, utilize the command npm init -y to initialize and create a package.json where project files will be stored.

Next, use the terminal to run the command npm i to install the dependencies associated with this application (developers may need to install dependencies directly from the command line).

Commands to install each dependency:

Command for sequelize will be npm i sequelize
Command for mysql2 will be npm i mysql2
Command for express will be npm i express@4.17.1
Command for dotenv will be npm i dotenv
Command for nodemon will be npm i nodemon
Next, you will need to make sure you have an added .env file within the root directory of your repository, within which you will pass your environmental variables specifying the database name, your MySQL username, and your MySQL password. This will need to be completed before running the application, and will allow the connection.js file to utilize your environmental variables keeping your sensitive information protected.

Once all dependencies are installed, you will need to create the database. To do this you will need to navigate to the directory db directory containing the schema.sql file. Once there, you will need to open up a MySQL shell using the command mysql -u root -p, where you will then be prompted to enter you password. Once your password is entered you will be in the MySQL shell.

Once in the MySQL shell you will then run the command source schema.sql. This will create the database

Once the database has been created, you will then need to seed the database (this will also create the model structure for the tables within the database). To do this, navigate to the root directory and run the command npm run seed. This needs to be done from the root directory because the .env file lives within the root.

Once the database has been seeded, you will then be able to run the command npm start from the root directory to spin up the server.

From there, you can utilize applications such as Insomnia to test the functionality of the routes within the program.

##  Test Instructions
There is currently no testing written for this application.

## Credits
https://www.codementor.io/@parthibakumarmurugesan/

what-is-env-how-to-set-up-and-run-a-env-file-in-node-1pnyxw9yxj

https://www.youtube.com/watch?v=CG3G5lpxE0Y

Josh and Gabe from class, Juan Delgado (tutor) tofor help with fixing lots of errors in my code)