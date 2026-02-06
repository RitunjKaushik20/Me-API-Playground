const router = require("express").Router()
const { getProfile } = require("../controllers/profile.controllers")

router.get("/", getProfile)

module.exports = router
