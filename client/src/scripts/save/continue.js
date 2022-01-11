import { getItemFromDB } from '../database'
import { $continueLink, $enemyField, $unionField } from '../constants/nodes'
import { playerOne, playerTwo } from '../constants/constants'
import { createElementOnField, setElementSize, setElementPosition, removeElementOnField } from '../field/elementOnField'

export const checkContinueGame = () => {
	const progress = JSON.parse(getItemFromDB('progress'))

	if (!progress) return

	$continueLink.classList.remove('_disable')

	$continueLink.onclick = () => {
		progress.playerOne.ships.forEach(shipData => createElementByData(shipData, progress.playerOne.playerTurn))
		progress.playerTwo.ships.forEach(shipData => createElementByData(shipData, progress.playerTwo.playerTurn))

		progress.playerOne.marks.forEach(shipData => createElementByData(shipData, progress.playerOne.playerTurn))
		progress.playerTwo.marks.forEach(shipData => createElementByData(shipData, progress.playerTwo.playerTurn))
	}
}

const createElementByData = (elementData, turn) => {
	const { icon, width, height, top, left } = elementData
	const classNames = [icon]
	let $element
	let currentPlayer = playerOne

	if (!turn) {
		classNames.push('_hide')

		currentPlayer = playerTwo
	}

	if (icon.startsWith('_icon-ship')) {
		classNames.push('field__ship')

		$element = createElementOnField($unionField, classNames)

		currentPlayer.ships.push($element)
		currentPlayer.coords.push([top, left])
	} else {
		classNames.push('field__mark')

		$element = createElementOnField($enemyField, classNames)

		currentPlayer.marks.push($element)
		currentPlayer.shots.push([top, left])
	}

	setElementSize($element, width, height)
	setElementPosition($element, top, left)

	if (!turn) $element.remove()
}
