import { getItemFromDB } from '../database'
import { $positionShipList } from '../constants/nodes'
import { shipFormList } from '../constants/nodeLists'
import { shipSize } from '../constants/constants'

export const fillPositionShipList = () => {
	$positionShipList.innerHTML = ''

	shipFormList.forEach($form => {
		const { id } = $form
		const numberOfships = getItemFromDB(id)

		if (numberOfships > 60) return

		for (let i = 0; i < numberOfships; i++) {
			$positionShipList.insertAdjacentHTML('beforeend', getShip(id, shipSize[id]))
		}
	})
}

const getShip = (id, size) => {
	return `
      <li class="ship__item" data-item="ship" data-size="${size}" data-icon="_icon-${id}"> 
          <span class="ship__icon _icon _icon-${id}"></span>
      </li>
    `
}
