import { getItemFromDB, replaceItemInDB } from '../database'
import { $canvasOnSizeSection, $fieldRange } from '../constants/nodes'
import { fieldList } from '../constants/nodeLists'
import { drawField } from '../field/draw'
import { fillPositionShipList } from '../ship/totalShips'
import { checkMode } from '../player/mode'
import { toggleChangeCurrentPlayer } from '../player/mode'
import { fillField } from '../player/swich'

export const checkRoutes = id => {
	if (id === 'botLink') {
		replaceItemInDB('mode', 'bot')
	} else if (id === 'friendLink') {
		replaceItemInDB('mode', 'friend')
	} else if (id === 'positionLink') {
		drawField(getItemFromDB($fieldRange.id), ...[...fieldList].filter($field => $field !== $canvasOnSizeSection))
		fillPositionShipList()
		checkMode()
	} else if (id === 'battleLink') {
		toggleChangeCurrentPlayer()
		fillField()
	}
}
