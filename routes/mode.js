const { Router } = require('express')

const router = Router()

router.get('/mode', (req, res) => res.send('mode get'))

router.post('/mode', (req, res) => res.send('mode'))

module.exports = router