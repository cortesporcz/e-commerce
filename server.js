const express = require('express');
const routes = require('./Develop/routes');
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sequelize connection
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Sync Sequelize models to the database
// Replace User with your actual model name if you have defined one
sequelize.sync({ force: false }) // Use { force: true } to drop and recreate tables on each sync (for development)
   .then(() => {
    console.log('All models were synchronized successfully.');
   })
   .catch(err => {
    console.error('Error syncing models:', err);
   });

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
