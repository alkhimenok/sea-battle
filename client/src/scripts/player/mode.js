import { getItemFromDB } from '../database'
import { $playerChangeName, $changePlayerPosition, $changeLink, $playerSavedName } from '../constants/nodes'
import { setPlayerNames } from './nameing'
import { changePlayerPosition } from '../field/placementShips'
import { handleSwichPlayer } from './swich'

export const checkMode = () => {
	const mode = getItemFromDB('mode')

	if (mode === 'bot') {
		$changePlayerPosition.classList.add('_hide')
		$changeLink.classList.add('_hide')
	} else if (mode === 'friend') {
		$changePlayerPosition.classList.remove('_hide')
		$changeLink.classList.remove('_hide')

		$changePlayerPosition.onclick = () => {
			toggleChangeCurrentPlayer()
			changePlayerPosition()

			$changePlayerPosition.classList.add('_hide')
			$changePlayerPosition.onclick = null
		}
		$changeLink.addEventListener('click', handleSwichPlayer)
	}
}

export const toggleChangeCurrentPlayer = () => {
	if ($playerChangeName.dataset.player === 'playerOne') {
		$playerChangeName.dataset.player = 'playerTwo'
		$playerSavedName.dataset.player = 'playerTwo'
	} else {
		$playerChangeName.dataset.player = 'playerOne'
		$playerSavedName.dataset.player = 'playerOne'
	}

	setPlayerNames()
}