import { setItemToDB } from '../database'
import { playerOne, playerTwo } from '../constants/constants'

export const saveGameData = () => {
	const gameData = {
		playerOne: {
			ships: [],
			marks: [],
			playerTurn: false,
		},
		playerTwo: {
			ships: [],
			marks: [],
			playerTurn: false,
		},
	}

	gameData.playerOne.ships = playerOne.ships.map(getElementData)
	gameData.playerTwo.ships = playerTwo.ships.map(getElementData)

	gameData.playerOne.marks = playerOne.marks.map(getElementData)
	gameData.playerTwo.marks = playerTwo.marks.map(getElementData)
}

const getElementData = $element => {
	const { width, height, top, left } = $element.style

	return { width: parseInt(width), height: parseInt(height), top: parseInt(top), left: parseInt(left) }
}

