import 'normalize.css'
import './styles/main.scss'

import { setStats } from './scripts/stats'
import { setGameOptions } from './scripts/size/options'
import { drawField } from './scripts/fiels/draw'
import { fillpositionShipsList } from './scripts/position/totalShips'
import { transitionNavList, addTransitionHandler } from './scripts/transition/transition'
import { shipsFormList, changeCountShipsHandler } from './scripts/size/numberOfShits'
import { $fieldSizeRange, startFieldResize, changeFieldSize, endFieldResize } from './scripts/size/resizeField'

// import { dragShipStart } from './scripts/position/dragShips'
// import { $enemyField, setMousePosition, renderMark, removeMark, placeMark } from './scripts/fiels/move'

import { } from './scripts/fiels/move'

const start = () => {
	setStats()
	setGameOptions()
	drawField()
	fillpositionShipsList()
	// dragShipStart()

	transitionNavList.forEach($nav => $nav.addEventListener('click', addTransitionHandler))
	shipsFormList.forEach($form => $form.addEventListener('click', changeCountShipsHandler))

	$fieldSizeRange.addEventListener('pointerdown', startFieldResize)
	$fieldSizeRange.addEventListener('input', changeFieldSize)
	$fieldSizeRange.addEventListener('pointerup', endFieldResize)

	// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		// $positionField.addEventListener('click', placeMark)
	// } else {
		// $enemyField.addEventListener('mousemove', setMousePosition)
		// $enemyField.addEventListener('mouseover', renderMark)
		// $enemyField.addEventListener('mouseout', removeMark)
		// $enemyField.addEventListener('click', placeMark)
// }
}

window.addEventListener('load', start)
