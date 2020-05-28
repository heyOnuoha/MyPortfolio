const Skill = require('../models/skill.model')

module.exports.getSkills = async () => {

    return ( await Skill.find({}) )
}