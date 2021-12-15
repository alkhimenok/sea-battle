const { Router } = require('express')

const router = Router()

router.get('/stats', (req, res) => res.send('stats get'))

router.put('/stats', (req, res) => res.send('stats put'))

module.exports = router