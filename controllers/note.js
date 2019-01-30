const Note = require("../models/Note")

module.exports = {
    index: (req, res) => {   
        Note.find({})
        .sort({ createdAt: -1 })
        .then( notes => {
            res.render("note/index", { notes })
        })
       }  
    }
      
// module.exports = {
//     index: (req, res) => {   
//             res.render("note/index")
//         }  
//     };


   