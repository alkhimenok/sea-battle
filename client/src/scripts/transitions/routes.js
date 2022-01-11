import { getItemFromDB, replaceItemInDB } from '../database'
import { LONG_DELAY } from '../constants/constants'
import { createBot } from '../player/bot'
import { $canvasOnSizeSection, $fieldRange } from '../constants/nodes'
import { fieldList } from '../constants/nodeLists'
import { drawField } from '../field/draw'
import { fillPositionShipList } from '../ship/totalShips'
import { checkMode } from '../player/mode'
import { resetPlayerNaming } from '../player/nameing'
import { setVariablesForPlacemnt, resetShipPosition } from '../field/placementShips'
import { showSaveModal } from '../save/modal'
import { toggleChangeCurrentPlayer } from '../player/mode'
import { fillField } from '../player/swich'
import { setVarieblesForAttack } from '../field/attack'

export const checkRoutes = id => {
	if (id === 'botLink') {
		replaceItemInDB('mode', 'bot')
	} else if (id === 'friendLink') {
		replaceItemInDB('mode', 'friend')
	} else if (id === 'baskSizeLink') {
		resetPlayerNaming()
		resetShipPosition()
	} else if (id === 'positionLink') {
		if (getItemFromDB('mode') === 'bot') {
			createBot()
		}
		drawField(getItemFromDB($fieldRange.id), ...fieldList.filter($field => $field !== $canvasOnSizeSection))
		fillPositionShipList()
		checkMode()
		setVariablesForPlacemnt()
	} else if (id === 'logOffLink') {
		setTimeout(showSaveModal, LONG_DELAY)
	} else if (id === 'battleLink') {
		if (getItemFromDB('mode') === 'friend') {
			toggleChangeCurrentPlayer()
		}
		setVarieblesForAttack()
		fillField()
	}
}
