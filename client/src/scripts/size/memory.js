import { shipsFormList, checkLimitShips } from './numberOfShits'
import { $fieldSizeRange } from './resizeField'

export const checkMemorySize = () => {
	$fieldSizeRange.value = localStorage.getItem($fieldSizeRange.id) || 10

	shipsFormList.forEach(setNumberOfShits)
}

const setNumberOfShits = $form => {
	const { id, value: $value, plus: $plus, minus: $minus } = $form
	let totlaShips = 0

	if (id === 'shipFour') {
		totlaShips = 1
	} else if (id === 'shipThree') {
		totlaShips = 2
	} else if (id === 'shipTwo') {
		totlaShips = 3
	} else if (id === 'shipOne') {
		totlaShips = 4
	}

	$value.value = localStorage.getItem(id) || totlaShips

	checkLimitShips($value.value, $plus, $minus)
}
