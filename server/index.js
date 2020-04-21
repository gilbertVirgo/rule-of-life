const express = require("express")
const app = express()

app.use(express.json())

const cors = require("cors")
app.use(cors())

const format = require("./format")

app.post("/form", async (req, res) => {
  const data = await format.toImage(req.body)

  res.json(data)
})

app.listen(4000, () => console.log("Server running."))
