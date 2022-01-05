import { shipsFormList } from '../size/numberOfShits'

export const $positionShipsList = document.querySelector('#positionShipsList')

const shipSize = { shipOne: 1, shipTwo: 2, shipThree: 3, shipFour: 4 }

export const fillpositionShipsList = () => {
	$positionShipsList.innerHTML = ''

	shipsFormList.forEach($form => {
		const count = localStorage.getItem($form.id)

		if (count > 100) return

		for (let i = 0; i < count; i++) {
			$positionShipsList.insertAdjacentHTML('beforeend', getShip($form.id, i))
		}
	})
}

const getShip = (id, i) => { // draggable="true"
	return `
    <li class="ships__item" id="${id + i}" data-item="ship" data-size="${shipSize[id]}" data-icon="_icon-${id}" draggable="true"> 
        <span class="ships__icon _icon-${id}"></span>
    </li>
  `
}
