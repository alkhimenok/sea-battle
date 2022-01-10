import 'normalize.css'
import './index.scss'

import { navList, fieldList, shipFormList } from './scripts/constants/nodeLists'
import { $fieldRange, $fieldOnPositionSection, $positionShipList, $playerName } from './scripts/constants/nodes'

import { getItemFromDB } from './scripts/database'

import { setGameOptions } from './scripts/option'
import { drawField } from './scripts/field/draw'
import { setStats } from './scripts/stats'
import { fillPositionShipList } from './scripts/ship/totalShips'
import { checkMode } from './scripts/player/mode'
import { setPlayerNames } from './scripts/player/nameing'

import { handlePageTransition } from './scripts/transitions/transition'
import { handleChangeNumberOfShips } from './scripts/limit/numberOfships'

import { handleChangePlayerName } from './scripts/player/nameing'

import { handleStartFieldResize, handleChangeFieldSize, handleEndFieldResize } from './scripts/limit/fieldResize'
import {
	handleShipSelectionForPlacement,
	handleCreateShipOnField,
	handlePositionShipOnField,
	handleRemoveShipOnField,
	handlePlaceShipOnField,
	handleShipBackFromField
} from './scripts/field/placementShips'

const start = () => {
	setGameOptions()
	drawField(getItemFromDB($fieldRange.id), ...fieldList)
	setStats()
	fillPositionShipList()
	checkMode()
	setPlayerNames()

	navList.forEach($nav => $nav.addEventListener('click', handlePageTransition))
	shipFormList.forEach($form => $form.addEventListener('click', handleChangeNumberOfShips))

	$playerName.addEventListener('change', handleChangePlayerName)

	$fieldRange.addEventListener('pointerdown', handleStartFieldResize)
	$fieldRange.addEventListener('input', handleChangeFieldSize)
	$fieldRange.addEventListener('pointerup', handleEndFieldResize)

	$positionShipList.addEventListener('click', handleShipSelectionForPlacement)

	$fieldOnPositionSection.addEventListener('mouseover', handleCreateShipOnField)
	$fieldOnPositionSection.addEventListener('mousemove', handlePositionShipOnField)
	$fieldOnPositionSection.addEventListener('mouseout', handleRemoveShipOnField)
	$fieldOnPositionSection.addEventListener('click', handlePlaceShipOnField)
	$fieldOnPositionSection.addEventListener('dblclick', handleShipBackFromField)
}

window.addEventListener('load', start)
