
const express = require('express')
const app = express()
const port = 3000

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.json())

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.json({ msg: "Hello World" })
})

app.post('/studentNames', (req, res) => {
  let incomingData = req.body.studentNames
  console.log(incomingData)
  res.json({ firstStudentName: incomingData[0] })
})


module.exports = {
  app,
  server
}