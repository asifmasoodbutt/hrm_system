const express = require('express')
const router = express.Router()

// define the home page route
router.get('/users-listing', (req, res) => {
  res.send('Users Listing')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router