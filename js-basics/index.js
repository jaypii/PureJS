const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_jsBasics', 'root', 'mysql$adm', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
     max: 5,
     min: 0,
     acquire: 30000,
     idle: 10000
  }
});

sequelize
   .authenticate()
   .then(() => {
      console.log('Connection has been established successfully.');
   })
   .catch(err => {
      console.error('Unable to connect to the database:', err);
   });



