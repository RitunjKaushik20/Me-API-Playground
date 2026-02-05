const router = require("express").Router()
const { getTopSkills } = require("../controllers/skill.controller")

router.get("/top", getTopSkills)

module.exports = router
