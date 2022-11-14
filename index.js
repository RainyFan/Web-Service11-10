// es6 module
import express from 'express'

import { extract } from 'article-parser'


// Create an instance of an express application 
const app = express()

// Set the port the application will be running on
const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/', (req, res) => {
  res.send("Time to Rest Service")
})

app.get('/parseArticle', (req, res) => {
  const input = 'https://www.cnbc.com/2022/09/21/what-another-major-rate-hike-by-the-federal-reserve-means-to-you.html'
extract(input)
  .then(article => {
    console.log(article.title)
    console.log(article.image)
    
  })
  .catch(err => console.error(err))

  res.send("Second time try out")
})

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}` )
})