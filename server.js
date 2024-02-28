const express = require('express');
const routes = require('./routes');
// build connection
const sequelize = require('./config/connection');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
sequelize.sync({force:false}).then(()=>{
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});  
})
// Start the server

