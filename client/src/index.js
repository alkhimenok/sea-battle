import 'normalize.css'
import './styles/main.scss'

import { setStats } from './scripts/stats'
import { setGameOptions } from './scripts/options'
import { drawField } from './scripts/fiels/draw'
import { fillpositionShipsList } from './scripts/position/totalShips'
import { transitionNavList, addTransitionHandler } from './scripts/transition/transition'
import { shipsFormList, changeCountShipsHandler } from './scripts/size/numberOfShits'
import { $fieldSizeRange, startFieldResize, changeFieldSize, endFieldResize } from './scripts/size/resizeField'
import { $enemyField, handleRenderDragMark, handlePositionDragMark, handleRemoveDragMark, handlePlaceMark } from './scripts/fiels/attack'
// import { $changeTransitionLink, swichPlayer } from './scripts/fiels/swich'

import { dragShipStart } from './scripts/position/dragShips'

const start = () => {
	setStats()
	setGameOptions()
	drawField()
	fillpositionShipsList()
	dragShipStart()

	transitionNavList.forEach($nav => $nav.addEventListener('click', addTransitionHandler))
	shipsFormList.forEach($form => $form.addEventListener('click', changeCountShipsHandler))

	$fieldSizeRange.addEventListener('pointerdown', startFieldResize)
	$fieldSizeRange.addEventListener('input', changeFieldSize)
	$fieldSizeRange.addEventListener('pointerup', endFieldResize)

	$enemyField.addEventListener('mouseover', handleRenderDragMark)
	$enemyField.addEventListener('mousemove', handlePositionDragMark)
	$enemyField.addEventListener('mouseout', handleRemoveDragMark)
	$enemyField.addEventListener('click', handlePlaceMark)
	// $changeTransitionLink.addEventListener('click', swichPlayer)



	// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
}

window.addEventListener('load', start)
