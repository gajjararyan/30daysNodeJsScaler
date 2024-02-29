const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json())
function loggingMiddleware(req, res, next){
  const timestamp = new Date().toISOString()
  const request = req.method
  const url = req.path
  const header = req.headers
  const body = req.body
 next()
}

app.use(loggingMiddleware)

app.get("/",(req,res) => {
res.send("Hello This is me Aryan!!")
})

  app.post("/",(req,res) => {
  const name = req.body.name
    res.send(`Hello ${name}`)
  })

app.listen(3000, () => {
  console.log("server is running on port 3000");
})
