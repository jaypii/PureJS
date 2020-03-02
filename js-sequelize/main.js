const models = require('./models')

const init = async () => {
  try {
    await models.Campus.sync({force: true}) // force true will drop the table if it already exists
    console.log('Tables have synced!')
  } catch(err) {
    console.log(err)
  }
  
}

init();