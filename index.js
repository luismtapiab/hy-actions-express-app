const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1> <h2>by Luis Tapia</h2> <p> I had set up a CI/CD pipeline with gh actions and Watchtower</p>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})