const prisma = require("../db/prisma")

exports.getProfile = async (req, res) => {
  const profile = await prisma.profile.findFirst({
    include: { skills: true }
  })
  res.json(profile)
}
