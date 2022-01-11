import { getItemFromDB, replaceItemInDB } from '../database'
import { $size, $canvasOnSizeSection, $fieldSizeLabel } from '../constants/nodes'
import { shipFormList } from '../constants/nodeLists'
import { drawField } from '../field/draw'
import { checkShipsLimit, getFreeSpaceOnField } from './numberOfships'

export const handleStartFieldResize = e => {
	const { target: $fieldRange } = e
	const { value } = $fieldRange

	$fieldSizeLabel.textContent = `${value}x${value}`

	$size.classList.add('_resize')
}

export const handleChangeFieldSize = e => {
	const { target: $fieldRange } = e
	const { id, value } = $fieldRange
	const assignedValue = getItemFromDB(id)

	if (checkMaxValue(value, assignedValue)) {
		$fieldRange.value = assignedValue
	} else {
		$fieldSizeLabel.textContent = `${value}x${value}`
		drawField(value, $canvasOnSizeSection)
		replaceItemInDB(id, value)
		checkShipsLimit(getItemFromDB('takes'))
	}
}

export const handleEndFieldResize = () => $size.classList.remove('_resize')

const checkMaxValue = (value, assignedValue) => (isNoRemainder(assignedValue) || isPlusDisabled()) && value < assignedValue

const isNoRemainder = (assignedValue) => getFreeSpaceOnField(assignedValue - 1, getItemFromDB('takes')) < 0

const isPlusDisabled = () => shipFormList.some($form => $form.plus.classList.contains('_disable'))
