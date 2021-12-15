const { Router } = require('express')

const router = Router()

router.get('/size', (req, res) => res.render('size'))

router.post('/size', (req, res) => res.send('size'))

module.exports = router