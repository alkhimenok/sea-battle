const canvasList = document.querySelectorAll('[data-canvas="field"]')

export const drawField = () => {
	const PRIMARY_COLOR = '#256696'
	const SECONDARY_COLOR = '#a8c6db'

	canvasList.forEach($canvas => {
		const ctx = $canvas.getContext('2d')

		const VUEW_WIDTH = $canvas.clientWidth * 2
		const VUEW_HEIGHT = $canvas.clientHeight * 2

		const NUMBER_OF_POSITIONS_PER_LINE = localStorage.getItem('fieldSizeRange') || 10

		$canvas.width = VUEW_WIDTH
		$canvas.height = VUEW_HEIGHT

		const POSITION_WIDTH = VUEW_WIDTH / NUMBER_OF_POSITIONS_PER_LINE
		const POSITION_HEIGHT = POSITION_WIDTH

		ctx.clearRect(0, 0, VUEW_WIDTH, VUEW_HEIGHT)

		ctx.beginPath()
		ctx.strokeStyle = SECONDARY_COLOR
		ctx.lineWidth = 1

		for (let i = 0; i < NUMBER_OF_POSITIONS_PER_LINE; i++) {
			ctx.moveTo(POSITION_WIDTH * i, 0)
			ctx.lineTo(POSITION_WIDTH * i, VUEW_HEIGHT)

			ctx.moveTo(0, POSITION_HEIGHT * i)
			ctx.lineTo(VUEW_WIDTH, POSITION_HEIGHT * i)
			ctx.stroke()
		}

		ctx.beginPath()
		ctx.strokeStyle = PRIMARY_COLOR
		ctx.lineWidth = 2
		ctx.rect(0, 0, VUEW_WIDTH, VUEW_HEIGHT)
		ctx.stroke()
	})
}
