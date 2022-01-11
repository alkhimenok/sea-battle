import { getItemFromDB } from '../database'
import { $changeLink, $enemyField } from '../constants/nodes'
import { playerOne, playerTwo } from '../constants/constants'
import { createElementOnField, setElementSize, setElementPosition, removeElementOnField } from './elementOnField'
import { makeBotMove } from '../player/bot'
import { isWinningMove } from '../gameOver/winningMove'

let enemyCoords
let shots
let marks
let $dragMark
let markTop
let markLeft
let positionSize

export const setVarieblesForAttack = () => {
	enemyCoords = playerTwo.coords
	shots = playerOne.shots
	marks = playerOne.marks
	positionSize = getItemFromDB('positionSize')
}

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
	if (!checkForPlacement(e.target) || isCoordsToken(shots)) return

	const $mark = createElementOnField($enemyField, ['field__mark', isCoordsToken(enemyCoords) ? '_icon-crossMark' : '_icon-okMark'])

	setElementSize($mark, positionSize, positionSize)
	setElementPosition($mark, markTop, markLeft)

	shots.push([markTop, markLeft])
	marks.push($mark)

	if (getItemFromDB('mode') === 'bot') {
		setTimeout(makeBotMove, 200)
	} else {
		$changeLink.classList.remove('_disable')
		$enemyField.classList.add('_no-move')
	}

	removeElementOnField($dragMark)
	isWinningMove(enemyCoords, markTop, markLeft)
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

export const resetMarkPosition = () => {
	playerOne.marks.forEach($mark => removeElementOnField($mark))
	playerOne.marks.length = 0
	playerOne.shots.length = 0

	playerTwo.marks.forEach($mark => removeElementOnField($mark))
	playerTwo.marks.length = 0
	playerTwo.shots.length = 0

	$enemyField.classList.remove('_no-move')

	setVarieblesForAttack()
}

const checkForPlacement = target => target === $enemyField && !$enemyField.classList.contains('_no-move')

const isCoordsToken = coords => coords.some(coord => coord[0] === markTop && coord[1] === markLeft)
