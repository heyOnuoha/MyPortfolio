const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')

const profileService = require('../services/profile.service')
const skillService = require('../services/skill.service')
const sectionService = require('../services/section.service')

const app = express()

const Section = require('../models/section.model')
const SectionBody = require('../models/section.body.model')

try {
    require('../mongo.connection')
} catch (error) {
    console.error(error.message)
}

app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

// new SectionBody({
//     sectionId: '335fc02c-478d-4564-a240-f7c9b23ab84e',
//     title: 'Enrout Delivery Backend Services',
//     tags: 'Node &bull; Firebase &bull; MongoDB',
//     body: 'I worked on the majority of the backend services powering Enrout which includes the Search Algorithm and Trip Distribution, Enrout Realtime API, Enrout Developer API, Enrout Vendor API, Payment Ledger, Pricing System and aswell as our Advanced Polygonal Geofencing Algorithm',
//     link: 'https://enroutdelivery.com'
// }).save()

// new SectionBody({
//     sectionId: '335fc02c-478d-4564-a240-f7c9b23ab84e',
//     title: 'Enrout Delivery Operational, Vendor and Fleet Dashboard',
//     tags: 'Angular &bull; Firebase &bull; REST &bull; Google Maps',
//     body: "I worked on the Enrout's main Operational/Oversite Dashboard rigged to tract and provide oversite over our day to day activites at Enrout. I also worked on our Vendor and Fleet Dashboards aswell",
//     link: 'https://enroutdelivery.com'
// }).save()

// new SectionBody({
//     sectionId: '335fc02c-478d-4564-a240-f7c9b23ab84e',
//     title: 'ATLAS',
//     tags: 'C# &bull; WiseJ &bull; MSSQL ',
//     body: "ATLAS is an Investment Portfolio and CIS Management Software built by Teksol LTD, I worked on certain areas relating to Money Transfers.",
//     link: 'https://teksol.com.gh'
// }).save()

app.get('/', async (req, res) => {

    const context = {
        profile: await profileService.getProfileData(),
        skills: await skillService.getSkills(),
        sections: await sectionService.getSections()
    }

    return res.render('index', { ...context })
})

app.listen(9120)
console.log('Server started on port 9120')

module.exports = app