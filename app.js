const exporess = require('express')
const path = require('path')

const app = exporess()

const PORT = 5000

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'templates'))

app.use(exporess.static(path.resolve(__dirname, 'templates')))

app.use('/', require('./routes/main'))
app.use('/', require('./routes/stats'))
app.use('/', require('./routes/play'))
app.use('/parameters', require('./routes/size'))
app.use('/parameters', require('./routes/positions'))
app.use('/parameters', require('./routes/mode'))

const start = () => {
	try {
		app.listen(PORT, () => console.log(`server started on port ${PORT}`))
	} catch (e) {
		console.log(`Server error: ${e.message}`)
		process.exit(1)
	}
}

start()
