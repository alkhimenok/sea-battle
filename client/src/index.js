import 'normalize.css'
import './index.scss'

import { navList, fieldList, shipFormList } from './scripts/constants/nodeLists'
import { $fieldRange, $fieldOnPositionSection, $positionShipList, $playerChangeName, $enemyField } from './scripts/constants/nodes'
import { getItemFromDB } from './scripts/database'
import { setGameOptions } from './scripts/option'
import { checkContinueGame } from './scripts/save/continue'
import { drawField } from './scripts/field/draw'
import { setStats } from './scripts/stats'
import { fillPositionShipList } from './scripts/ship/totalShips'
import { checkMode } from './scripts/player/mode'
import { setPlayerNames } from './scripts/player/nameing'
import { setVariablesForPlacemnt } from './scripts/field/placementShips'
import { setVarieblesForAttack } from './scripts/field/attack'
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
	handleShipBackFromField,
} from './scripts/field/placementShips'
import {
	handleCreateMarkOnField,
	handlePositionMarkOnField,
	handleRemoveMarkOnField,
	handlePlaceMarkOnField,
} from './scripts/field/attack'

const start = () => {
	setGameOptions()
	checkContinueGame()
	drawField(getItemFromDB($fieldRange.id), ...fieldList)
	setStats()
	fillPositionShipList()
	checkMode()
	setPlayerNames()
	setVariablesForPlacemnt()
	setVarieblesForAttack()

	navList.forEach($nav => $nav.addEventListener('click', handlePageTransition))
	shipFormList.forEach($form => $form.addEventListener('click', handleChangeNumberOfShips))

	$fieldRange.addEventListener('pointerdown', handleStartFieldResize)
	$fieldRange.addEventListener('input', handleChangeFieldSize)
	$fieldRange.addEventListener('pointerup', handleEndFieldResize)
	$playerChangeName.addEventListener('change', handleChangePlayerName)
	$positionShipList.addEventListener('click', handleShipSelectionForPlacement)
	$fieldOnPositionSection.addEventListener('mouseover', handleCreateShipOnField)
	$fieldOnPositionSection.addEventListener('mousemove', handlePositionShipOnField)
	$fieldOnPositionSection.addEventListener('mouseout', handleRemoveShipOnField)
	$fieldOnPositionSection.addEventListener('click', handlePlaceShipOnField)
	$fieldOnPositionSection.addEventListener('dblclick', handleShipBackFromField)
	$enemyField.addEventListener('mouseover', handleCreateMarkOnField)
	$enemyField.addEventListener('mousemove', handlePositionMarkOnField)
	$enemyField.addEventListener('mouseout', handleRemoveMarkOnField)
	$enemyField.addEventListener('click', handlePlaceMarkOnField)
}

window.addEventListener('load', start)
