import { getItemFromDB, setItemToDB, isItemInDB } from './database'
import { $fieldRange } from './constants/nodes'
import { shipFormList } from './constants/nodeLists'
import { shipSize } from './constants/constants'
import { checkShipsLimit } from './limit/numberOfships'

export const setGameOptions = () => {
	checkGameOptions()

	$fieldRange.value = getItemFromDB($fieldRange.id)

	shipFormList.forEach($form => ($form.value.value = getItemFromDB($form.id)))

	checkShipsLimit(getItemFromDB('takes'))
}

const checkGameOptions = () => {
	if (!isDatabaseConatains()) return

	setItemToDB('takes', 20)
	setItemToDB($fieldRange.id, 10)

	shipFormList.forEach($form => setItemToDB($form.id, shipSize[$form.id]))
}

const isDatabaseConatains = () => {
	return !(isItemInDB('takes') && isItemInDB($fieldRange.id) && [...shipFormList].every($form => isItemInDB($form.id)))
}
