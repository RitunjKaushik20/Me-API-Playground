require("dotenv").config()
const express = require("express")
const cors = require("cors")
const rateLimit = require("./middlewares/rateLimit")


const app = express()
app.use(rateLimit)

const logger = require("./utils/logger")

app.use((req, res, next) => {
  logger.info({ method: req.method, url: req.url })
  next()
})


app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:8000",
    "https://me-api-playground-frontend-six.vercel.app",
    ...(process.env.CORS_ORIGINS?.split(",") || [])
  ]
}))

app.use(express.json())

app.use("/", require("./routes/health.routes"))
app.use("/profile", require("./routes/profile.routes"))
app.use("/projects", require("./routes/project.routes"))
app.use("/skills", require("./routes/skill.routes"))
app.use("/search", require("./routes/search.routes"))

module.exports = app
