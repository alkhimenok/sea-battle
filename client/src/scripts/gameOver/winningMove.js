import { getItemFromDB } from '../database'
import { $playerSavedName } from '../constants/nodes'
import { playerOne } from '../constants/constants'
import { changeStats } from '../stats'
import { showCongratulation } from './congratulation'

export const isWinningMove = (coords, top, left) => {
	coords.forEach((coord, i) => (coord[0] === top && coord[1] === left ? coords.splice(i, 1) : coord))

	if (coords.length !== 0) return

	let winnerName = $playerSavedName.value + ', you won'
	let message = 'Great game! Again?'

	if (getItemFromDB('mode') === 'bot') {
		if (coords === playerOne.coords) {
			winnerName = 'You lost)'
			message = 'Nothing! Again?'
			changeStats('lose')
		} else {
			winnerName = 'You won'
			changeStats('win')
		}
	}

	showCongratulation(winnerName, message)
}
