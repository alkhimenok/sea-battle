import { getItemFromDB } from '../dataBase'

export const $enemyField = document.querySelector('#enemyField')

let positionSize = getItemFromDB('positionSize')
let dragMarkX
let dragMarkY
let $dragMark

const markds = []
const coords = []
// let player2Coords = [
// 	[0, 0],
// 	[24, 24],
// 	[48, 48],
// ]

export const handleRenderDragMark = () => {
	$dragMark = createMark(positionSize)
}

export const handlePositionDragMark = e => {
	const { offsetX, offsetY } = e

	dragMarkX = Math.floor(offsetX / positionSize) * positionSize
	dragMarkY = Math.floor(offsetY / positionSize) * positionSize

	setMarkPosition($dragMark, dragMarkX, dragMarkY)
}

export const handleRemoveDragMark = () => {
	$dragMark.classList.add('_hide')

	setTimeout(() => $dragMark.remove(), 200)
}

// export const handlePlaceMark = () => {
// 	if (coords.some(isCoordIncludes)) return

// 	const classNames = []

// 	if (isPlaceToken()) {
// 		classNames.push('_icon-crossMark')
// 		// player2Coords = player2Coords.filter(coord => !isCoordIncludes(coord))
// 	} else {
// 		classNames.push('_tagged')
// 	}

// 	const $currentMark = createMark(positionSize, classNames)

// 	setMarkPosition($currentMark, dragMarkX, dragMarkY)

// 	coords.push([dragMarkX, dragMarkY])
// 	markds.push([$currentMark])
// }

export const handlePlaceMark = (player1, player2) => {
	// if (player1.shots.some(isCoordIncludes)) return
	console.log(player2.coords);
	const classNames = []

	if (player2.coords.some(isCoordIncludes)) {
		classNames.push('_icon-crossMark')
		player2.coords = player2.coords.filter(coord => !isCoordIncludes(coord))
	} else {
		classNames.push('_tagged')
	}

	const $currentMark = createMark(positionSize, classNames)

	setMarkPosition($currentMark, dragMarkX, dragMarkY)

	player1.shots.push($currentMark)

	if (player2.coords.length === 0) alert('end')
}

const createMark = (size, classNames = []) => {
	const $mark = document.createElement('span')

	$mark.classList.add('field__mark', '_icon-okMark', '_hide')

	classNames.forEach(className => $mark.classList.add(className))

	$enemyField.insertAdjacentElement('beforeend', $mark)

	setTimeout(() => $mark.classList.remove('_hide'), 0)

	setMarkSize($mark, size)

	return $mark
}

const setMarkSize = ($mark, size) => {
	$mark.style.fontSize = (size / 3) * 2 + 'px'
	$mark.style.width = size + 'px'
	$mark.style.height = size + 'px'
}

const setMarkPosition = ($mark, x, y) => {
	$mark.style.left = x + 'px'
	$mark.style.top = y + 'px'
}

const isPlaceToken = () => JSON.parse(getItemFromDB('palyer1Positions')).some(isCoordIncludes)

const isCoordIncludes = coord => coord[0] === dragMarkX && coord[1] === dragMarkY