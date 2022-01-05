import { createMark } from './attack'
import { drawMyShips } from './ships'

export const $changeTransitionLink = document.querySelector('#changeTransitionLink')

const player1 = {
	locationShips: [
		{ x: 0, y: 0, size: 4, isVertical: true },
		{ x: 96, y: 96, size: 3, isVertical: false },
		{ x: 96, y: 192, size: 2, isVertical: false },
	],
	shots: [
		{
			x: 48,
			y: 48,
			size: 24,
			status: ['_tagged'],
		},
		{
			x: 72,
			y: 72,
			size: 24,
			status: ['_icon-crossMark'],
		},
		{
			x: 96,
			y: 96,
			size: 24,
			status: ['_tagged'],
		},
		{
			x: 120,
			y: 120,
			size: 24,
			status: ['_icon-crossMark'],
		},
	],
}

export const swichPlayer = e => {
	let currentPlayer = player1

	const { locationShips, shots } = currentPlayer

  locationShips.forEach(drawMyShips)
	shots.forEach(shot => createMark(shot.x, shot.y, shot.size, shot.status))

	e.preventDefault()
}

$changeTransitionLink.addEventListener('click', swichPlayer)
