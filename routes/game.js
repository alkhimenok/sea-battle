const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => res.render('index', { progress: true }))

module.exports = router
