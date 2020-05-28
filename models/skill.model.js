const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Skill = new Schema({
    title: {
        type: String,
        required: true
    },
    skills: [ String ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('skill', Skill, 'data_skills')