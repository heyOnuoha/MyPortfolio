const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Profile = new Schema({
    profileName: {
        type: String,
        required: [ true, 'profileName is required ']
    },
    profileTitle: {
        type: String,
        required: [ true, 'profileTitle is required' ]
    },
    profileLocation: {
        type: String,
        required: [ true, 'profileLocation is required' ]
    },
    profilePhoneNumber: {
        type: String,
        default: ''
    },
    profileEmail: {
        type: String,
        default: ''
    },
    profilePhoto: {
        type: String,
        default: ''
    },
    profileLinks: [{
        outlet: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('profile', Profile, 'data_profile')