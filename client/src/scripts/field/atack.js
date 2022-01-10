import { getItemFromDB } from '../database'
import { $changeLink, $enemyField } from '../constants/nodes'
import { playerOne, playerTwo } from '../constants/constants'
import { createElementOnField, setElementSize, setElementPosition, removeElementOnField } from './elementOnField'

const positionSize = getItemFromDB('positionSize')

let enemyCoords = playerTwo.coords
let shots = playerOne.shots
let marks = playerOne.marks
let $dragMark
let markTop
let markLeft

export const handleCreateMarkOnField = e => {
	if (!checkForPlacement(e.target)) return

	$dragMark = createElementOnField($enemyField, ['field__mark', '_mobile', '_icon-okMark'])

	setElementSize($dragMark, positionSize, positionSize)
}

export const handlePositionMarkOnField = e => {
	if (!checkForPlacement(e.target)) return

	const { offsetX, offsetY } = e

	markTop = Math.floor(offsetY / positionSize) * positionSize
	markLeft = Math.floor(offsetX / positionSize) * positionSize

	setElementPosition($dragMark, markTop, markLeft)
}

export const handleRemoveMarkOnField = e => {
	if (!checkForPlacement(e.target)) return

	removeElementOnField($dragMark)
}

export const handlePlaceMarkOnField = e => {
	if (!checkForPlacement(e.target) || idCoordsToken(shots)) return

	const $mark = createElementOnField($enemyField, ['field__mark', idCoordsToken(enemyCoords) ? '_icon-crossMark' : '_icon-okMark'])

	setElementSize($mark, positionSize, positionSize)
	setElementPosition($mark, markTop, markLeft)

	shots.push([markTop, markLeft])
	marks.push($mark)

	$changeLink.classList.remove('_disable')
	$enemyField.classList.add('_no-move')

	removeElementOnField($dragMark)
}

export const togglechangePlayerData = () => {
	if (enemyCoords === playerTwo.coords) {
		enemyCoords = playerOne.coords
		shots = playerTwo.shots
		marks = playerTwo.marks
	} else {
		enemyCoords = playerTwo.coords
		shots = playerOne.shots
		marks = playerOne.marks
	}
}

const checkForPlacement = target => target === $enemyField && !$enemyField.classList.contains('_no-move')

const idCoordsToken = coords => coords.some(coord => coord[0] === markTop && coord[1] === markLeft)
