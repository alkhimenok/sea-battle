import 'normalize.css'
import './styles/main.scss'

import { $fieldRange, checkMemorySize } from './scripts/size/memory'
import { transitionsNavs, addMoveHandler } from './scripts/transitions/move'
import { operatorsForm, changeCountShipsHandler } from './scripts/size/numberOfShits'
import { startResize, changeFieldSize, endResize } from './scripts/size/resizeField'

const start = () => {
	checkMemorySize()

	transitionsNavs.forEach($nav => $nav.addEventListener('click', addMoveHandler))
	operatorsForm.forEach($form => $form.addEventListener('click', changeCountShipsHandler))

	$fieldRange.addEventListener('mousedown', startResize)
	$fieldRange.addEventListener('input', changeFieldSize)
	$fieldRange.addEventListener('mouseup', endResize)
}

window.addEventListener('load', start)
