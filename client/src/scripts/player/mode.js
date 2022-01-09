import { getItemFromDB } from '../database'
import { $playerName, $changePlayerPosition } from '../constants/nodes'
import { setPlayerNames } from './nameing'

export const checkMode = () => {
	const mode = getItemFromDB('mode')

	if (mode === 'bot') {
		$changePlayerPosition.classList.add('_hide')
	} else if (mode === 'friend') {
		$changePlayerPosition.classList.remove('_hide')

		$changePlayerPosition.onclick = e => {
			$playerName.dataset.player = 'playerTwo'

			setPlayerNames()

			$changePlayerPosition.classList.add('_hide')
      $changePlayerPosition.onclick = null
		}
	}
}
