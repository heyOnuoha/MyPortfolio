const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid/v4')

const Section = new Schema({
    sectionId: {
        type: String,
        default: uuid
    },
    title: {
        type: String,
        required: true
    },
    isLarge: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

Section.virtual('sectionData', {
    ref: 'section_body',
    foreignField: 'sectionId',
    localField: 'sectionId'
})

module.exports = mongoose.model('section', Section, 'data_sections')