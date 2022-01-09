import { getItemFromDB, setItemToDB, isItemInDB } from './database'
import { $fieldRange } from './constants/nodes'
import { shipFormList } from './constants/nodeLists'

export const setGameOptions = () => {
	checkGameOptions()

  $fieldRange.value = getItemFromDB($fieldRange.id)

  shipFormList.forEach($form => ($form.value.value = getItemFromDB($form.id)))

  // checkLimitShips()
}

const checkGameOptions = () => {
	if (!isDatabaseConatains()) return

	const numberOfShips = { shipOne: 4, shipTwo: 3, shipThree: 2, shipFour: 1 }

	setItemToDB('takes', 20)
	setItemToDB($fieldRange.id, 10)

	shipFormList.forEach($form => setItemToDB($form.id, numberOfShips[$form.id]))
}

const isDatabaseConatains = () => {
	return !(isItemInDB('takes') && isItemInDB($fieldRange.id) && [...shipFormList].every($form => isItemInDB($form.id)))
}
