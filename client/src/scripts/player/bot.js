import { getItemFromDB } from '../database'
import { $unionField } from '../constants/nodes'
import { shipFormList } from '../constants/nodeLists'
import { shipTakes, playerOne, playerTwo } from '../constants/constants'
import { isShipWillFit } from '../field/placementShips'
import { createElementOnField, setElementSize, setElementPosition } from '../field/elementOnField'
import { isWinningMove } from '../gameOver/winningMove'

export const createBot = () => {
	const { coords } = playerTwo
	const positionSize = getItemFromDB('positionSize')
	const vueSize = getItemFromDB('vueSize')

	coords.length = 0

	shipFormList.forEach($form => {
		const { id } = $form
		const numberOfShips = getItemFromDB(id)

		for (let j = 0; j < +numberOfShips; j++) {
			const freePosition = getFreePosition(coords, shipTakes[id], positionSize, vueSize)

			for (let i = 0; i < shipTakes[id]; i++) {
				coords.push([freePosition[0], freePosition[1] + positionSize * i])
			}
		}
	})
}

export const makeBotMove = () => {
	const { shots, marks } = playerTwo
	const positionSize = getItemFromDB('positionSize')
	const vueSize = getItemFromDB('vueSize')
	const range = vueSize / positionSize

	let randomShot = getRandomCoords(range, positionSize)

	while (isCoordsToken(shots, randomShot[0], randomShot[1])) {
		randomShot = getRandomCoords(range, positionSize)
	}

	const $mark = createElementOnField($unionField, ['field__mark', isCoordsToken(playerOne.coords, randomShot[0], randomShot[1]) ? '_icon-crossMark' : '_icon-okMark'])

	setElementSize($mark, positionSize, positionSize)
	setElementPosition($mark, randomShot[0], randomShot[1])

	shots.push(randomShot)
	marks.push($mark)

	isWinningMove(playerOne.coords, randomShot[0], randomShot[1])
}

const getFreePosition = (coords, shipSize, positionSize, vueSize) => {
	const range = vueSize / positionSize

	let randomCoords = getRandomCoords(range, positionSize)

	while (
		!isShipWillFit(coords, randomCoords[0], randomCoords[1], shipSize, positionSize) ||
		randomCoords[1] + positionSize * shipSize >= vueSize
	) {
		randomCoords = getRandomCoords(range, positionSize)
	}

	return randomCoords
}

const getRandomCoords = (range, positionSize) => [getRandomNumber(range, positionSize), getRandomNumber(range, positionSize)]

const getRandomNumber = (range, positionSize) => Math.floor(Math.random() * range) * positionSize

const isCoordsToken = (coords, top, left) => coords.some(coord => coord[0] === top && coord[1] === left)
