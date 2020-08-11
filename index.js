const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('Hello World chnaged !')
=======
  res.send('Hello World xyz reverted! edited_1 edited_2 edited_3')
>>>>>>> f3fbe02d16cd801262fa21e46ffcdd94241c00a3
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
}) 
