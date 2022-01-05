import { getItemFromDB, setItemToDB, isItemInDB } from './dataBase'
import { shipsFormList, checkLimitShips } from './size/numberOfShits'
import { $fieldSizeRange } from './size/resizeField'

const numberOfShips = { shipOne: 4, shipTwo: 3, shipThree: 2, shipFour: 1 }

export const setGameOptions = () => {
	checkGameOptions()

	$fieldSizeRange.value = getItemFromDB($fieldSizeRange.id)

	shipsFormList.forEach($form => ($form.value.value = getItemFromDB($form.id)))

	checkLimitShips()
}

const checkGameOptions = () => {
	if (!allIncludes()) {
		setItemToDB('takes', 20)
		setItemToDB($fieldSizeRange.id, 10)
		setItemToDB('positionSize', 24)

		shipsFormList.forEach($form => setItemToDB($form.id, numberOfShips[$form.id]))
	}
}

const allIncludes = () => {
	return isItemInDB('takes') && isItemInDB($fieldSizeRange.id) && [...shipsFormList].every($form => isItemInDB($form.id)) && isItemInDB('positionSize')
}
