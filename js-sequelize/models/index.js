const Sequelize = require('sequelize')
const db = new Sequelize('mysql://localhost:3306/sequelize-guide', {logging: false}) 

const Campus = db.define('campuses', {
   name: {
     type: Sequelize.STRING,
   },
   address: {
     type: Sequelize.STRING,
   },
   description: {
     type: Sequelize.TEXT
   }
})