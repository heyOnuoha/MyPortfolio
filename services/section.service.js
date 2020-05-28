const Section = require('../models/section.model')
const SectionBody = require('../models/section.body.model')

module.exports.getSections = async () => {

    return ( await Section.find({}).populate('sectionData').sort('createdAt') )
}