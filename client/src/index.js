import 'normalize.css'
import './index.scss'

import { navList, fieldList, shipFormList } from './scripts/constants/nodeLists'
import { $fieldRange } from './scripts/constants/nodes'

import { getItemFromDB } from './scripts/database'

import { drawField } from './scripts/field/draw'
import { setGameOptions } from './scripts/option'
import { setStats } from './scripts/stats'

import { handlePageTransition } from './scripts/transitions/transition'
import { handleChangeNumberOfShips } from './scripts/limit/numberOfships'

const start = () => {
	drawField(getItemFromDB($fieldRange.id), ...fieldList)
	setGameOptions()
	setStats()

	navList.forEach($nav => $nav.addEventListener('click', handlePageTransition))
	shipFormList.forEach($form => $form.addEventListener('click', handleChangeNumberOfShips))
}

window.addEventListener('load', start)
