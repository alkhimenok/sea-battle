const { Router } = require('express')

const router = Router()

router.get('/play', (req, res) => res.send('play'))

module.exports = router