import { getItemFromDB, setItemToDB } from '../database'
import { $playerSavedName } from '../constants/nodes'
import { playerOne, playerTwo } from '../constants/constants'
import { checkContinueGame } from './continue'

export const saveGameData = () => {
	const gameData = {
		playerOne: {
			ships: [],
			marks: [],
			playerTurn: $playerSavedName.value === getItemFromDB('playerOne'),
      playerName: getItemFromDB('playerOne'),
		},
		playerTwo: {
			ships: [],
			marks: [],
			playerTurn: $playerSavedName.value === getItemFromDB('playerTwo'),
      playerName: getItemFromDB('playerTwo'),
		},
		positionSize: getItemFromDB('positionSize'),
		vueSize: getItemFromDB('vueSize'),
	}

	gameData.playerOne.ships = playerOne.ships.map(getElementData)
	gameData.playerTwo.ships = playerTwo.ships.map(getElementData)

	gameData.playerOne.marks = playerOne.marks.map(getElementData)
	gameData.playerTwo.marks = playerTwo.marks.map(getElementData)

	setItemToDB('progress', JSON.stringify(gameData))

	checkContinueGame()
}

const getElementData = $element => {
	const { width, height, top, left } = $element.style
  const icon = [...$element.classList].filter(className => className.startsWith('_icon-')).join('')

	return { icon, width: parseInt(width), height: parseInt(height), top: parseInt(top), left: parseInt(left) }
}
