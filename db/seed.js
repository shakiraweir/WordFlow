const mongoose = require("../models/Note")
const seeds = require("./seedData.json")
// need require for connection and seed json
// const Note = mongoose.model("Note");
mongoose.Promise = Promise
Note.remove({}).then(_ => {
    // console.log('Dropped the DB')
    Note.collection.insert(seeds).then(seededEntries => {
    //   console.log(seededEntries)
      mongoose.connection.close()
    })
  })
 

//   const mongoose = require('./connection')
// const seeds = require('./seed.json')

// // const Story = mongoose.model('Story')
// const Story = require("../models/story")
// mongoose.Promise = Promise

// Story.remove({}).then(() => {
// //   console.log('Dropped the DB')
//   Story.collection.insert(seeds).then(seededEntries => {
//     // console.log(seededEntries)
//     mongoose.connection.close()
//     // process.exit()
//   })
// })