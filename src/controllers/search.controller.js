const prisma = require("../db/prisma")

exports.search = async (req, res) => {
  const q = req.query.q

  const projects = await prisma.project.findMany({
    where: {
      OR: [
        { title: { contains: q, mode: "insensitive" } },
        { description: { contains: q, mode: "insensitive" } }
      ]
    }
  })

  const skills = await prisma.skill.findMany({
    where: { name: { contains: q, mode: "insensitive" } }
  })

  res.json({ projects, skills })
}
