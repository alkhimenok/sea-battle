import { getItemFromDB, setItemToDB } from "../dataBase"

export const shipsFormList = document.querySelectorAll('[data-form="ships"]')

export let takes = +getItemFromDB('takes') || 20

const shipsTakes = { shipOne: 1, shipTwo: 2, shipThree: 3, shipFour: 4 }

export const changeCountShipsHandler = e => {
	const { target, currentTarget: $form } = e
	const { id, value: $value, plus: $plus } = $form

	if (target.tagName !== 'BUTTON' || target.classList.contains('_disable')) return

	$value.value = target === $plus ? +$value.value + 1 : $value.value - 1
	target === $plus ? takes += shipsTakes[id] : takes -= shipsTakes[id]

	setItemToDB(id, $value.value)
	setItemToDB('takes', takes)
	checkLimitShips()

	e.preventDefault()
}

export const checkLimitShips = () => {
	const rest = getFreeSpaceOnField()

	shipsFormList.forEach($form => {
		const { id, value: $value, plus: $plus, minus: $minus } = $form

		$value.value == 0 ? $minus.classList.add('_disable') : $minus.classList.remove('_disable')

		shipsTakes[id] > rest ? $plus.classList.add('_disable') : $plus.classList.remove('_disable')
	})
}

const getFreeSpaceOnField = () => Math.floor((getItemFromDB('fieldSizeRange') ** 2 / 100) * 20 - takes)
