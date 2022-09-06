const express = require('express')
const connect = require('./db/mongoose')
const changeStreamConfigRouter = require('./routers/changeStreamConfigRouter')
connect()
const app = express()
app.use(express.json())

app.use('/v1/changeStream', changeStreamConfigRouter)

const port = process.env.PORT

app.listen(port, () => {
  console.log(`server started on ${port} `)
})
