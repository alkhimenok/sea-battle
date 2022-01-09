import 'normalize.css'
import './index.scss'

import { navList, fieldList, shipFormList } from './scripts/constants/nodeLists'
import { $fieldRange } from './scripts/constants/nodes'

import { getItemFromDB } from './scripts/database'

import { drawField } from './scripts/field/draw'
import { setGameOptions } from './scripts/option'
import { setStats } from './scripts/stats'
import { fillPositionShipList } from './scripts/ship/totalShips'

import { handlePageTransition } from './scripts/transitions/transition'
import { handleChangeNumberOfShips } from './scripts/limit/numberOfships'

import { handleStartFieldResize, handleEndFieldResize, handleChangeFieldSize } from './scripts/limit/fieldResize'

const start = () => {
	setGameOptions()
	drawField(getItemFromDB($fieldRange.id), ...fieldList)
	setStats()
	fillPositionShipList()

	navList.forEach($nav => $nav.addEventListener('click', handlePageTransition))
	shipFormList.forEach($form => $form.addEventListener('click', handleChangeNumberOfShips))

	$fieldRange.addEventListener('pointerdown', handleStartFieldResize)
	$fieldRange.addEventListener('input', handleChangeFieldSize)
	$fieldRange.addEventListener('pointerup', handleEndFieldResize)
}

window.addEventListener('load', start)
