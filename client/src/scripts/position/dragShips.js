





// import { getItemFromDB } from '../dataBase'

// const $positionField = document.querySelector('#positionField')

// let positionSize = getItemFromDB('positionSize')
// let vueSize = getItemFromDB('vueSize')

// let $currentShip
// let shipSize
// let shipIcon
// let shipX
// let shipY

// const coords = []
// const ships = []

// export const dragShipStart = () => {
// 	const shipsList = document.querySelectorAll('[data-item="ship"]')

// 	shipsList.forEach($ship => {
// 		$ship.addEventListener('mousedown', setShipOption)
// 		$ship.addEventListener('mousedown', setShipState)
// 	})

// 	$positionField.addEventListener('mouseover', handleCreateShip)
// 	$positionField.addEventListener('mouseout', handleRemoveShip)
// 	$positionField.addEventListener('mousemove', handlePositionShip)
// 	$positionField.addEventListener('click', handlePlaceShip)
// }

// const setShipOption = e => {
// 	const { target } = e
// 	const { size, icon } = target.dataset

// 	target.classList.add('_hide')

// 	shipSize = size
// 	shipIcon = icon
// }

// const setShipState = () => {
// 	if ($currentShip === undefined) {

// 	}
// }

// const handleCreateShip = () => {
// 	if (!(shipSize || shipIcon)) return

// 	$currentShip = createShip(shipIcon)
// }

// const createShip = icon => {
// 	const $ship = document.createElement('span')

// 	$ship.classList.add('field__ship', icon, '_hide')

// 	$positionField.insertAdjacentElement('beforeend', $ship)

// 	setTimeout(() => $ship.classList.remove('_hide'), 0)

// 	setShipSize($ship, positionSize, shipSize)

// 	return $ship
// }

// const handleRemoveShip = () => {
// 	if (!(shipSize || shipIcon)) return

// 	$currentShip.classList.add('_hide')

// 	setTimeout(() => $currentShip.remove(), 200)
// }

// export const handlePositionShip = e => {
// 	if (!(shipSize || shipIcon)) return

// 	const { offsetX, offsetY } = e

// 	shipX = Math.floor(offsetX / positionSize) * positionSize
// 	shipY = Math.floor(offsetY / positionSize) * positionSize
// 	const v = shipX + $currentShip.clientWidth

// 	if (v >= vueSize) {
// 		shipX = vueSize - $currentShip.clientWidth
// 	}

// 	setMarkPosition($currentShip, shipX, shipY)
// }


// export const handlePlaceShip = () => {
// 	if (!(shipSize || shipIcon)) return
// 	if (coords.some(isCoordIncludes)) return

// 	const classNames = []

// 	// if (isPlaceToken()) {
// 	// 	classNames.push('_icon-crossMark')
// 	// 	player2Coords = player2Coords.filter(coord => !isCoordIncludes(coord))
// 	// } else {
// 	// 	classNames.push('_tagged')
// 	// }

// 	const $currentShip = createShip(shipIcon)

// 	setMarkPosition($currentShip, shipX, shipY)

// 	for (let i = 0; i < shipSize; i++) {
// 		coords.push([shipX + (positionSize * i), shipY])
// 	}

// 	ships.push($currentShip)

// 	clearShipData()
// }

// const setShipSize = ($ship,size, shipSize) => {
// 	$ship.style.fontSize = ((size) / 3) * 2 + 'px'
// 	$ship.style.width = size * shipSize + 'px'
// 	$ship.style.height = size + 'px'
// }

// const setMarkPosition = ($mark, x, y) => {
// 	$mark.style.left = x + 'px'
// 	$mark.style.top = y + 'px'
// }

// // const isPlaceToken = () => player2Coords.some(isCoordIncludes)

// const isCoordIncludes = coord => coord[0] === shipX && coord[1] === shipY


// const clearShipData = () => {
// 	$currentShip = undefined
// 	shipSize = undefined
// 	shipIcon = undefined
// 	shipX = undefined
// 	shipY = undefined
// }