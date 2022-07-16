const express = require('express')

const router = express.Router()
const tweets = require('./tweets/routes')

router.route('/tweets',tweets)

// obtener con el get http://localhost:3000/api/tweets

module.exports = router;