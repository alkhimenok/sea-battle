const { Router } = require('express')

const router = Router()

router.get('/play', (req, res) => res.render('play'))

module.exports = router