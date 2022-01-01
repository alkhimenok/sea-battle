import { shipsFormList } from '../size/numberOfShits'

export const $positionShipsList = document.querySelector('#positionShipsList')

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

const getShip = (id, i) => {
	return `
    <li class="ships__item" id="${id + i}" data-item="ship" draggable="true">
        <span class="ships__icon _icon-${id}"></span>
    </li>
  `
}
