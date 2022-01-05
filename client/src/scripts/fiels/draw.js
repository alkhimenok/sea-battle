import { getItemFromDB, setItemToDB } from "../dataBase"

const canvasList = document.querySelectorAll('[data-canvas="field"]')

const PRIMARY_COLOR = '#256696'
const SECONDARY_COLOR = '#a8c6db'

export const drawField = () => {
	const NUMBER_OF_POSITIONS_PER_LINE = getItemFromDB('fieldSizeRange') || 10

	canvasList.forEach($canvas => {
		const ctx = $canvas.getContext('2d')

		const VUE_SIZE = $canvas.clientWidth * 2
		const POSITION_SIZE = VUE_SIZE / NUMBER_OF_POSITIONS_PER_LINE

		$canvas.width = VUE_SIZE
		$canvas.height = VUE_SIZE
		
		setItemToDB('positionSize', POSITION_SIZE / 2)
		setItemToDB('vueSize', VUE_SIZE / 2)
		
		ctx.clearRect(0, 0, VUE_SIZE, VUE_SIZE)

		ctx.beginPath()
		ctx.strokeStyle = SECONDARY_COLOR
		ctx.lineWidth = 1
		for (let i = 0; i < NUMBER_OF_POSITIONS_PER_LINE; i++) {
			ctx.moveTo(POSITION_SIZE * i, 0)
			ctx.lineTo(POSITION_SIZE * i, VUE_SIZE)

			ctx.moveTo(0, POSITION_SIZE * i)
			ctx.lineTo(VUE_SIZE, POSITION_SIZE * i)
		}
		ctx.stroke()

		ctx.beginPath()
		ctx.strokeStyle = PRIMARY_COLOR
		ctx.lineWidth = 2
		ctx.rect(0, 0, VUE_SIZE, VUE_SIZE)
		ctx.stroke()
	})
}
