const Profile = require('../models/profile.model')

module.exports.getProfileData = async () => {

    return (await Profile.find({}).limit(1))[0]
}