const { Router } = require('express')

const router = Router()

router.get('/size', (req, res) => res.send('size get'))

router.post('/size', (req, res) => res.send('size'))

module.exports = router