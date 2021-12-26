const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => res.render('game', { progress: true }))

// router.put('/', (req, res) => res.render('game', { progress: true })) // change saving game // localstorage
// router.put('/', (req, res) => res.render('game', { progress: true })) // stats

module.exports = router
