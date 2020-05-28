const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid').v4

const SectionBody = new Schema({
    sectionId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        minlength: 5,
        required: true
    },
    tags: String,
    link: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('section_body', SectionBody, 'data_section_body')