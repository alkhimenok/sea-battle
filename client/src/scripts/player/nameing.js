import { getItemFromDB, replaceItemInDB } from '../database'
import { playerNameList } from '../constants/nodeLists'

export const setPlayerNames = () => {
	playerNameList.forEach($input => $input.value = getItemFromDB($input.dataset.player))
}

export const handleChangePlayerName = e => {
	const { target } = e
	const { value, dataset } = target

  replaceItemInDB(dataset.player, value)
}
