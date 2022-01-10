import { getItemFromDB } from '../database'
import { $playerName, $changePlayerPosition } from '../constants/nodes'
import { setPlayerNames } from './nameing'
import { changePlayer } from '../field/placementShips'

export const checkMode = () => {
	const mode = getItemFromDB('mode')

	if (mode === 'bot') {
		$changePlayerPosition.classList.add('_hide')
	} else if (mode === 'friend') {
		$changePlayerPosition.classList.remove('_hide')

		$changePlayerPosition.onclick = () => {
			$playerName.dataset.player = 'playerTwo'

			setPlayerNames()
			changePlayer()

			$changePlayerPosition.classList.add('_hide')
			$changePlayerPosition.onclick = null
		}
	}
}
