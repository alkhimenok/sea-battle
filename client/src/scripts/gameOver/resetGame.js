import { resetPlayerNaming } from '../player/nameing'
import { resetShipPosition } from '../field/placementShips'
import { resetMarkPosition } from '../field/attack'

export const resetGame = () => {
	resetPlayerNaming()
	resetShipPosition()
	resetMarkPosition()
}
