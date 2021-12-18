const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => res.render('game', { progress: true }))

// router.put('/', (req, res) => res.render('game', { progress: true })) // change saving game // localstorage

module.exports = router
