const path = require('path')
const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'templates'))

app.use(express.static(path.resolve(__dirname, 'client', 'dist')))
app.use('/', require('./routes/game'))

const start = () => {
	try {
		app.listen(PORT, () => console.log(`server started on port ${PORT}`))
	} catch (e) {
		console.log(`Server error: ${e.message}`)
		process.exit(1)
	}
}

start()
