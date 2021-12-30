import { shipsFormList, doShips } from './numberOfShits'
import { $fieldSizeRange } from './resizeField'

export const checkMemorySize = () => {
	const saved = localStorage.getItem($fieldSizeRange.id)
	let value = 10

	if (saved) {
		value = saved
	} else {
		localStorage.setItem($fieldSizeRange.id, value)
	}

	$fieldSizeRange.value = value

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

	const saved = localStorage.getItem(id)

	if (saved) {
		totlaShips = saved
	} else {
		localStorage.setItem(id, totlaShips)
	}

	$value.value = totlaShips

	doShips()
}
