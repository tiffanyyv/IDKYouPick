const User = require("../models/User")
const Business = require("../models/Business")
const db = require('../../db')

exports.add = (req, res) => {
    let newUser = new User({
        userName: req.body.username,
        likedBusinesses: '[]',
    })

    newUser.save(err => {
        if (err) {
            console.log('error adding new user')
        } else {
            console.log('saved user into DB')
        }
    })
};

// exports.get = (req, res) => {
//     User.find({ id: req.userID })
//         .exec((err, results) => {
//             if (err) {
//                 res.status(404).send(`error getting user with id ${req.userID}`)
//             } else {
//                 res.send(results)
//             }
//         })
// };

// exports.getAll = (req, res) => {
//     User.find()
//         .exec((err, results) => {
//             if (err) {
//                 res.status(404).send('error getting all users')
//             } else {
//                 res.send(results)
//             }
//         })
// };

exports.getFavoriteBusinesses = (req, res) => {
    Business.find().exec((err, results) => {
        if (err) {
            res.send('error getting favorite businesses')
        } else {
            res.send(results);
        }
    })
}

exports.addUserLikes = (req, res) => {
    const filter = { businessAddress: req.body.businessAddress }
    const options = {
        upsert: true
    }
    let newBusiness = new Business({
        businessName: req.body.businessName,
        businessPic: req.body.businessPic,
        businessAddress: req.body.businessAddress
    })

    // DONT LET USER ADD DUPLICATE
    newBusiness.save(err => {
        if (err) {
            console.log('error adding to liked businesses for user', err)
        } else {
            console.log('added to liked businesses for user in DB')
        }
    })

// somehow grab user id or username from the current session
    // User.update({ id: req.userID }, { $push: { likedBusinesses: newBusiness }})


}

// exports.deleteUserLikes = (req, res) => {
//     User.update({ id: req.userID }, { $pull: { likedBusinesses: req.businessID }})

//     User.save(err => {
//         if (err) {
//             console.log('error deleting from liked businesses for user')
//         } else {
//             console.log('deleted from liked businesses for user in DB')
//         }
//     })
// }