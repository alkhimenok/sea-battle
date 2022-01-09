import { getItemFromDB, replaceItemInDB } from '../database'
import { shipFormList } from '../constants/nodeLists'
import { shipTakes } from '../constants/constants'

export const handleChangeNumberOfShips = e => {
	if (!isValidTarget(e.target)) return

	const { target, currentTarget: $form } = e
	const { id, value: $value, plus: $plus } = $form

	let takes = +getItemFromDB('takes')

	$value.value = target === $plus ? +$value.value + 1 : $value.value - 1
	takes = target === $plus ? takes + shipTakes[id] : takes - shipTakes[id]

	replaceItemInDB(id, $value.value)
	replaceItemInDB('takes', takes)
	checkShipsLimit(takes)

	e.preventDefault()
}

export const checkShipsLimit = takes => {
	const rest = getFreeSpaceOnField(getItemFromDB('fieldRange'), takes)

	shipFormList.forEach($form => {
		const { id, value: $value, plus: $plus, minus: $minus } = $form

		$value.value == 0 ? $minus.classList.add('_disable') : $minus.classList.remove('_disable')

		shipTakes[id] > rest ? $plus.classList.add('_disable') : $plus.classList.remove('_disable')
	})
}

const isValidTarget = target => target.tagName === 'BUTTON' && !target.classList.contains('_disable')

const getFreeSpaceOnField = (fieldRange, takes) => Math.floor((fieldRange ** 2 / 100) * 20 - takes)
