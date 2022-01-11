import { getItemFromDB } from '../database'
import { $changeLink, $enemyField, $unionField, $playerSavedName } from '../constants/nodes'
import { playerOne, playerTwo } from '../constants/constants'
import { toggleChangeCurrentPlayer } from './mode'
import { togglechangePlayerData } from '../field/attack'
import { showElementOnField, removeElementOnField } from '../field/elementOnField'

export const handleSwichPlayer = () => {
	$changeLink.classList.add('_disable')
	$enemyField.classList.remove('_no-move')

	toggleChangeCurrentPlayer()
	togglechangePlayerData()
	fillField()
}

export const fillField = () => {
	let unionPlayer
	let enemyPlayer

	if ($playerSavedName.value === getItemFromDB('playerOne')) {
		unionPlayer = playerOne
		enemyPlayer = playerTwo
	} else {
		unionPlayer = playerTwo
		enemyPlayer = playerOne
	}

	console.log(unionPlayer, playerOne);
	console.log(enemyPlayer, playerTwo);
	
	enemyPlayer.ships.forEach($ship => removeElementOnField($ship))
	enemyPlayer.marks.forEach($mark => removeElementOnField($mark))
	unionPlayer.marks.forEach($mark => removeElementOnField($mark))

	setTimeout(() => {
		unionPlayer.ships.forEach($ship => showElementOnField($unionField, $ship))
		unionPlayer.marks.forEach($mark => showElementOnField($enemyField, $mark))
		enemyPlayer.marks.forEach($mark => showElementOnField($unionField, $mark))
	}, 600)
}
