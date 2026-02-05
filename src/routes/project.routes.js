const router = require("express").Router()
const { getProjects, createProject, deleteProject } = require("../controllers/project.controller")

router.get("/", getProjects)

const auth = require("../middlewares/basicAuth")

router.post("/", auth, createProject)
router.delete("/:id", auth, deleteProject)


module.exports = router
