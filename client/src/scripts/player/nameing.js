import { getItemFromDB, replaceItemInDB } from '../database'
import { $playerChangeName, $playerSavedName } from '../constants/nodes'
import { playerNameList } from '../constants/nodeLists'

export const setPlayerNames = () => {
	playerNameList.forEach($input => $input.value = getItemFromDB($input.dataset.player))
}

export const handleChangePlayerName = e => {
	const { target } = e
	const { value, dataset } = target

	if (target.value.length <= 0) return

  replaceItemInDB(dataset.player, value)
}

export const resetPlayerNaming = () => {
	$playerChangeName.dataset.player = 'playerOne'
	$playerSavedName.dataset.player = 'playerOne'

	setPlayerNames()
}