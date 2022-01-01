import 'normalize.css'
import './styles/main.scss'

import { setStats } from './scripts/stats'
import { setGameOptions } from './scripts/size/options'
import { drawField } from './scripts/fiels/draw'
import { fillpositionShipsList } from './scripts/position/totalShips'
import { transitionNavList, addTransitionHandler } from './scripts/transition/transition'
import { shipsFormList, changeCountShipsHandler } from './scripts/size/numberOfShits'
import { $fieldSizeRange, startFieldResize, changeFieldSize, endFieldResize } from './scripts/size/resizeField'

const start = () => {
	setStats()
	setGameOptions()
	drawField()
	fillpositionShipsList()

	transitionNavList.forEach($nav => $nav.addEventListener('click', addTransitionHandler))
	shipsFormList.forEach($form => $form.addEventListener('click', changeCountShipsHandler))

	$fieldSizeRange.addEventListener('pointerdown', startFieldResize)
	$fieldSizeRange.addEventListener('input', changeFieldSize)
	$fieldSizeRange.addEventListener('pointerup', endFieldResize)
}

window.addEventListener('load', start)
