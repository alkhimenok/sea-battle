import { getItemFromDB, setItemToDB, isItemInDB } from '../dataBase'
import { shipsFormList, checkLimitShips } from './numberOfShits'
import { $fieldSizeRange } from './resizeField'

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

		shipsFormList.forEach($form => setItemToDB($form.id, numberOfShips[$form.id]))
	}
}

const allIncludes = () => {
	return isItemInDB('takes') && isItemInDB($fieldSizeRange.id) && [...shipsFormList].every($form => isItemInDB($form.id))
}
























// export const checkMemorySize = () => {
// 	const takes = localStorage.getItem('takes')

// 	if (!takes) {
// 		localStorage.setItem('takes', 20)
// 	}

// 	const saved = localStorage.getItem($fieldSizeRange.id)
// 	let value = 10

// 	if (saved) {
// 		value = saved
// 	} else {
// 		localStorage.setItem($fieldSizeRange.id, value)
// 	}

// 	$fieldSizeRange.value = value

// 	shipsFormList.forEach(setNumberOfShits)
// }

// const setNumberOfShits = $form => {
// 	const { id, value: $value, plus: $plus, minus: $minus } = $form
// 	let totlaShips = 0

// 	if (id === 'shipFour') {
// 		totlaShips = 1
// 	} else if (id === 'shipThree') {
// 		totlaShips = 2
// 	} else if (id === 'shipTwo') {
// 		totlaShips = 3
// 	} else if (id === 'shipOne') {
// 		totlaShips = 4
// 	}

// 	const saved = localStorage.getItem(id)

// 	if (saved) {
// 		totlaShips = saved
// 	} else {
// 		localStorage.setItem(id, totlaShips)
// 	}

// 	$value.value = totlaShips

// 	doShips()
// }
