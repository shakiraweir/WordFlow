const Note = require("../models/Note")

module.exports = {
    index: (req, res) => {   
        Note.find({})
        .sort({ createdAt: -1 })
        .then( notes => {
            res.render("note/index", { notes })
        })
       },
    new: (req, res) => {
        res.render("note/new")
    }
    //    create: (req, res) => {   
    //     Note.create(req.body)
    //     // .sort({ createdAt: -1 })
    //     .then( notes => {
    //         res.render("note/index", { notes })
    //     })
    //    },

    }
      
// module.exports = {
//     index: (req, res) => {   
//             res.render("note/index")
//         }  
//     };


   