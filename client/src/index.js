import 'normalize.css'
import './styles/main.scss'

import { setStats } from './scripts/stats'
import { checkMemorySize } from './scripts/size/memory'
import { drawField } from './scripts/fiels/draw'
import { setShips } from './scripts/position/ships'
import { transitionsNavList, addTransitionHandler } from './scripts/transitions/transitions'
import { shipsFormList, changeCountShipsHandler } from './scripts/size/numberOfShits'
import { $fieldSizeRange, startFieldResize, changeFieldSize, endFieldResize } from './scripts/size/resizeField'

const start = () => {
	setStats()
	checkMemorySize()
	drawField()
	setShips()

	transitionsNavList.forEach($nav => $nav.addEventListener('click', addTransitionHandler))
	shipsFormList.forEach($form => $form.addEventListener('click', changeCountShipsHandler))

	$fieldSizeRange.addEventListener('pointerdown', startFieldResize)
	$fieldSizeRange.addEventListener('input', changeFieldSize)
	$fieldSizeRange.addEventListener('pointerup', endFieldResize)

	// if (localStorage.getItem('progress')) {
	// fetch
	// }
}

window.addEventListener('load', start)
