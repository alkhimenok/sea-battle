import { getItemFromDB } from '../database'
import { shipFormList } from '../constants/nodeLists'
import { shipTakes, playerTwo } from '../constants/constants'
import { isShipWillFit } from '../field/placementShips'

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

const getFreePosition = (coords, shipSize, positionSize, vueSize) => {
	const range = vueSize / positionSize

	let randomCoords = getRandomCoords(range, positionSize)

	while (!isShipWillFit(coords, randomCoords[0], randomCoords[1], shipSize, positionSize) || randomCoords[1] + positionSize * shipSize >= vueSize) {
		randomCoords = getRandomCoords(range, positionSize)
	}

	return randomCoords
}

const getRandomCoords = (range, positionSize) => [getRandomNumber(range, positionSize), getRandomNumber(range, positionSize)]

const getRandomNumber = (range, positionSize) => Math.floor(Math.random() * range) * positionSize
