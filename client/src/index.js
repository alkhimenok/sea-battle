import 'normalize.css'
import './styles/main.scss'

import { setStats } from './scripts/stats'
import { checkMemorySize } from './scripts/size/memory'
import { transitionsNavList, addTransitionHandler } from './scripts/transitions/transitions'
import { shipsFormList, changeCountShipsHandler } from './scripts/size/numberOfShits'
import { canvasList, drawField } from './scripts/fiels/draw'
import { $fieldSizeRange, startFieldResize, changeFieldSize, endFieldResize } from './scripts/size/resizeField'

const start = () => {
	setStats()
	checkMemorySize()

	transitionsNavList.forEach($nav => $nav.addEventListener('click', addTransitionHandler))
	shipsFormList.forEach($form => $form.addEventListener('click', changeCountShipsHandler))
	canvasList.forEach(drawField)

	$fieldSizeRange.addEventListener('mousedown', startFieldResize)
	$fieldSizeRange.addEventListener('input', changeFieldSize)
	$fieldSizeRange.addEventListener('mouseup', endFieldResize)

	// if (localStorage.getItem('progress')) {
	// fetch
	// }
}

window.addEventListener('load', start)
