const $myField = document.querySelector('#myField')

export const drawMyShips = shipData => {
	const $canvas = $myField.querySelector('canvas')
	const ctx = $canvas.getContext('2d')

	const { x, y, size, isVertical } = shipData

	let width = 24 * 2
	let height = 24 * 2

	if (isVertical) {
		height *= size
	} else {
		width *= size
	}

	ctx.fillRect(x * 2, y * 2, width, height)
}
