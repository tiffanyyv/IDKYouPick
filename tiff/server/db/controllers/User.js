const User = require("../models/User")
const Business = require("../models/Business")

exports.add = (req, res) => {
    let newUser = new User({
        userName: req.body.username,
        likedBusinesses: [],
    })

    newUser.save(err => {
        if (err) {
            console.log('error adding new user')
        } else {
            console.log('saved user into DB')
        }
    })
};

exports.getFavoriteBusinesses = (req, res) => {
    Business.find().exec((err, results) => {
        if (err) {
            res.send('error getting favorite businesses')
        } else {
            res.send(results);
        }
    })
}

exports.removeFavoriteBusiness = (req, res) => {
    Business.deleteOne({ businessName: req.body.params })
        .then(() => console.log('Removed from favorites'))
        .catch(err => console.log('Error removing from favorites'))
}

exports.addUserLikes = (req, res) => {
    let newBusiness = new Business({
        businessName: req.body.businessName,
        businessPic: req.body.businessPic,
        businessAddress: req.body.businessAddress,
        businessYelpURL: req.body.businessYelpURL
    })

    User.updateMany({ userName: req.body.currentUser }, { $push: { likedBusinesses: req.body.businessName } })
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    // DONT LET USER ADD DUPLICATE
    newBusiness.save(err => {
        if (err) {
            console.log('error adding to liked businesses for user', err)
        } else {
            console.log('added to liked businesses for user in DB')
        }
    })

}