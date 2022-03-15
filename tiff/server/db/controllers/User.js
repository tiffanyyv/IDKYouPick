const User = require("../models/User")
const Business = require("../models/Business")

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

exports.addUserLikes = (req, res) => {
    let newBusiness = new Business({
        id: req.business.id,
        businessName: req.business.name,
        date: Date.now,
        meta: { favs: 0 }
    })

    User.update({ id: req.userID }, { $push: { likedBusinesses: newBusiness }})

    User.save(err => {
        if (err) {
            console.log('error adding to liked businesses for user')
        } else {
            console.log('added to liked businesses for user in DB')
        }
    })
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