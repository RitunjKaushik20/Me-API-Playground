const prisma = require("../db/prisma")

exports.getTopSkills = async (req, res) => {
  const skills = await prisma.skill.findMany()
  res.json(skills)
}
