const express = require('express') ;
const app = express()
const sequelize = require('./database/db') ;

//Config
const PORT = process.env.PORT || 3000

//Rutes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Server Start
app.listen(PORT, async () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

})