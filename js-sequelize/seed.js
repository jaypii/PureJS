const {db, Campus} = require ('./models') // you need the connection to the database and Campus model

const seed = async () => {
  try {
    await db.sync({force: true})
  } catch (err) {
    console.log(err);
  }
  
  const harvard = await Campus.create({
    name: 'Harvard',
    address: 'PO Box 382609. Cambridge, MA 02238-2609.',
    description: 'World famous Ivy League university'
  })

  const stonybrook = await Campus.create({
    name: 'Stony Brook University',
    address:'100 Nicolls Rd, Stony Brook, NY 11794',
    description: 'It is one of four university centers of the State University of New York system.'
  })
  db.close() //close your db connection else the connection stays alive else your process hangs.
  console.log('Seed Successful!') //Have a prompt to let you know everything is working correctly!
}

seed()//initialize the sync!