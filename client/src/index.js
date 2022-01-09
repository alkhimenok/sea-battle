import 'normalize.css'
import './index.scss'

import { navList, fieldList } from './scripts/constants/nodeLists'
import { $fieldRange } from './scripts/constants/nodes'

import { getItemFromDB } from './scripts/database'

import { drawField } from './scripts/field/draw'
import { setGameOptions } from './scripts/option'
import { setStats } from './scripts/stats'

import { handlePageTransition } from './scripts/transitions/transition'

const start = () => {
	drawField(getItemFromDB($fieldRange.id), ...fieldList)
	setGameOptions()
	setStats()

	navList.forEach($nav => $nav.addEventListener('click', handlePageTransition))
}

window.addEventListener('load', start)
