import { getItemFromDB, setItemToDB } from '../dataBase'
import { drawField } from '../fiels/draw'
import { shipsFormList, checkLimitShips, takes } from './numberOfShits'

export const $fieldSizeRange = document.querySelector('#fieldSizeRange')

const $size = document.querySelector('#size')
const $fieldLabel = $size.querySelector('#fieldLabel')

export const startFieldResize = () => $size.classList.add('_resize')

export const endFieldResize = () => $size.classList.remove('_resize')

export const changeFieldSize = e => {
	const { value } = e.target

	if (checkMaxValue(value)) {
		e.target.value = +getItemFromDB('fieldSizeRange')
	} else {
		$fieldLabel.textContent = `${value}x${value}`

		setItemToDB(e.target.id, e.target.value)
		checkLimitShips()
		drawField()
	}
}

const checkMaxValue = value => {
	const currentValue = +getItemFromDB('fieldSizeRange')
	
	return (
		(
			[...shipsFormList].some($form => $form.plus.classList.contains('_disable')) ||
			Math.floor(((currentValue - 1) ** 2 / 100) * 20 - takes) < 0
		)
		&& value < currentValue
	)
}

