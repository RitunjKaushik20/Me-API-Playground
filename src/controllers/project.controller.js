const prisma = require("../db/prisma")

exports.getProjects = async (req, res) => {
  const { skill } = req.query

  const projects = await prisma.project.findMany({
    where: skill
      ? {
          skills: {
            some: {
              name: skill
            }
          }
        }
      : {},
    include: { skills: true }
  })

  res.json(projects)
}

exports.createProject = async (req, res) => {
  try {
    const { title, description, link, profileId, skillIds } = req.body

    const project = await prisma.project.create({
      data: {
        title,
        description,
        link,
        profileId: parseInt(profileId),
        skills: skillIds
          ? {
              connect: skillIds.map((id) => ({ id: parseInt(id) }))
            }
          : undefined
      },
      include: { skills: true }
    })

    res.json(project)
  } catch (error) {
    console.error("Error creating project:", error)
    res.status(500).json({ error: "Failed to create project" })
  }
}

exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params

    await prisma.project.delete({
      where: { id: parseInt(id) }
    })

    res.json({ message: "Project deleted successfully" })
  } catch (error) {
    console.error("Error deleting project:", error)
    res.status(500).json({ error: "Failed to delete project" })
  }
}
