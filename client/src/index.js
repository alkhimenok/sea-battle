import 'normalize.css'
import './index.scss'

import { fieldList } from './scripts/constants/nodeLists'
import { $fieldRange } from './scripts/constants/nodes'

import { getItemFromDB } from './scripts/database'

import { drawField } from './scripts/field/draw'
import { setGameOptions } from './scripts/option'
import { setStats } from './scripts/stats'

const start = () => {
	drawField(getItemFromDB($fieldRange.id), ...fieldList)
	setGameOptions()
	setStats()
}

window.addEventListener('load', start)
