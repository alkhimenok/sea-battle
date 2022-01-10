import { getItemFromDB, replaceItemInDB } from '../database'
import { playerNameList } from '../constants/nodeLists'

export const setPlayerNames = () => {
	playerNameList.forEach($input => $input.value = getItemFromDB($input.dataset.player))
}

export const handleChangePlayerName = e => {
	console.log(playerNameList);
	const { target } = e
	const { value, dataset } = target

	if (target.value.length <= 0) return

  replaceItemInDB(dataset.player, value)
}
