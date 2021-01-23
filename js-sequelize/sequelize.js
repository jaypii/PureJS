const Sequelize = require('sequelize')
const CampusModel = require('./models/campus')

const sequelize = new Sequelize('jsbasicsdb', 'root', 'mysql$adm', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Campus = CampusModel(sequelize, Sequelize)

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
})

module.exports = {
  Campus
}