const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World xyz reverted! edited_1 edited_2')
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
}) 
