const { Router } = require('express')

const router = Router()

router.get('/positions', (req, res) => res.send('positions get'))

router.post('/positions', (req, res) => res.send('positions'))

module.exports = router