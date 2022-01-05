import { getItemFromDB, setItemToDB } from '../dataBase'

const $positionField = document.querySelector('#positionField')
const $positionCard = document.querySelector('#positionCard')
const $positionShipsList = document.querySelector('#positionShipsList')

const positionSize = getItemFromDB('positionSize')
const vueSize = getItemFromDB('vueSize')

let $currentShip
let $dragShip
let shipIcon
let shipSize
let shipX
let shipY

let coords = []

export const dragShipStart = () => {
	$positionShipsList.addEventListener('click', handleSrartDragging)

	$positionField.addEventListener('mouseover', handleCreateShip)
	$positionField.addEventListener('mouseout', handleRemoveShip)
	$positionField.addEventListener('mousemove', handlePositionShip)
	$positionField.addEventListener('click', handlePlaceShip)
	$positionField.addEventListener('dblclick', handleShipBack)
}

const handleSrartDragging = e => {
	const { target, currentTarget } = e
	const { item, icon, size } = target.dataset

	if (item !== 'ship') return
	;[...currentTarget.children].forEach($ship => $ship.classList.remove('_selected'))

	target.classList.add('_selected')

	$currentShip = target
	shipIcon = icon
	shipSize = size
}

const handleCreateShip = e => {
	if (!$currentShip || e.target !== $positionField) return

	$dragShip = createShip($positionField, [shipIcon])

	setShipSize($dragShip, positionSize, shipSize)
}

const handleRemoveShip = e => {
	if (!$currentShip) return

	$dragShip.remove()

	// $dragShip.classList.add('_hide')
	// setTimeout(() => $dragShip.remove(), 200)
}

const handlePositionShip = e => {
	if (!$currentShip) return

	const { offsetX, offsetY } = e

	shipX = Math.floor(offsetX / positionSize) * positionSize
	shipY = Math.floor(offsetY / positionSize) * positionSize

	if (shipX + $dragShip.clientWidth >= vueSize) {
		shipX = vueSize - $dragShip.clientWidth
	}

	setShipPosition($dragShip, shipX, shipY)
}

export const handlePlaceShip = e => {
	if (!$currentShip || e.target !== $positionField) return
	if (isCoordIncludes(coords) || itCanFit(shipSize, shipX, shipY)) return

	const $ship = createShip($positionField, [shipIcon, '_tagged'])

	// const shipData = {
	// 	coords: [],
	// }

	setShipSize($ship, positionSize, shipSize)
	setShipPosition($ship, shipX, shipY)

	for (let i = 0; i < shipSize; i++) {
		coords.push([shipX + positionSize * i, shipY])
	}

	// shipData.item = $ship
	// ships.push(shipData)

	handleRemoveShip()

	$currentShip.classList.remove('_selected')
	$currentShip.classList.add('_disable')
	$currentShip = null

	setItemToDB('palyer1Positions', JSON.stringify(coords))
	// ships.map(i => i.coords).flat()
	// ships.map(shipsData => shipData.item).forEach($ship => $ship.addEventListener('mousemove', (e) => e.stopPropagation()))
}

const handleShipBack = e => {
	const { target } = e

	if (!target.classList.contains('field__ship')) return

	const shipIcon = [...target.classList]
		.filter(className => !(className === 'field__ship' || className === '_tagged'))
		.reduce((acc, className) => (acc = className), '')

	Array.from($positionShipsList.querySelectorAll(`.${shipIcon}`))
		.map($icon => $icon.closest('li'))
		.filter($ship => $ship.classList.contains('_disable'))[0]
		.classList.remove('_disable')

	for (let i = 0; i < parseInt(target.style.width) / positionSize; i++) {
		coords = coords.filter(
			coord => !(coord[0] === parseInt(target.style.left) + positionSize * i && coord[1] === parseInt(target.style.top))
		)
	}

	target.remove()
}

const createShip = ($parent, className = []) => {
	const $ship = document.createElement('span')

	$ship.classList.add('field__ship', '_hide')

	className.forEach(className => $ship.classList.add(className))

	$parent.insertAdjacentElement('beforeend', $ship)

	setTimeout(() => $ship.classList.remove('_hide'), 0)

	return $ship
}

const setShipSize = ($ship, positionSize, shipSize) => {
	$ship.style.fontSize = (positionSize / 3) * 2 + 'px'
	$ship.style.width = positionSize * shipSize + 'px'
	$ship.style.height = positionSize + 'px'
}

const setShipPosition = ($ship, x, y) => {
	$ship.style.left = x + 'px'
	$ship.style.top = y + 'px'
}

const isCoordIncludes = coords =>
	coords
		// .map(shipData => shipData.coords)
		// .flat()
		.some(coord => coord[0] === shipX && coord[1] === shipY)

const itCanFit = (size, shipX, shipY) => {
	const res = []

	for (let i = 0; i < +size; i++) {
		res.push(coords.some(coords => coords[0] === shipX + positionSize * i && coords[1] === shipY))
	}

	return res.some(item => item)
}

// import { getItemFromDB, setItemToDB } from '../dataBase'

// const $positionField = document.querySelector('#positionField')
// const $positionCard = document.querySelector('#positionCard')
// const $positionShipsList = document.querySelector('#positionShipsList')

// const positionSize = getItemFromDB('positionSize')
// const vueSize = getItemFromDB('vueSize')

// let $currentShip
// let $dragShip
// let shipIcon
// let shipSize
// let shipX
// let shipY

// const ships = []

// export const dragShipStart = () => {
// 	$positionShipsList.addEventListener('click', handleSrartDragging)

// 	$positionField.addEventListener('mouseover', handleCreateShip)
// 	$positionField.addEventListener('mouseout', handleRemoveShip)
// 	$positionField.addEventListener('mousemove', handlePositionShip)
// 	$positionField.addEventListener('click', handlePlaceShip)
// 	$positionField.addEventListener('dblclick', handleShipBack)
// }

// const handleSrartDragging = e => {
// 	const { target, currentTarget } = e
// 	const { item, icon, size } = target.dataset

// 	if (item !== 'ship') return
// 	;[...currentTarget.children].forEach($ship => $ship.classList.remove('_selected'))

// 	target.classList.add('_selected')

// 	$currentShip = target
// 	shipIcon = icon
// 	shipSize = size
// }

// const handleCreateShip = e => {
// 	if (!$currentShip || e.target !== $positionField) return

// 	$dragShip = createShip($positionField, [shipIcon])

// 	setShipSize($dragShip, positionSize, shipSize)
// }

// const handleRemoveShip = e => {
// 	if (!$currentShip) return

// 	$dragShip.remove()

// 	// $dragShip.classList.add('_hide')
// 	// setTimeout(() => $dragShip.remove(), 200)
// }

// const handlePositionShip = e => {
// 	if (!$currentShip) return

// 	const { offsetX, offsetY } = e

// 	shipX = Math.floor(offsetX / positionSize) * positionSize
// 	shipY = Math.floor(offsetY / positionSize) * positionSize

// 	if (shipX + $dragShip.clientWidth >= vueSize) {
// 		shipX = vueSize - $dragShip.clientWidth
// 	}

// 	setShipPosition($dragShip, shipX, shipY)
// }

// export const handlePlaceShip = e => {
// 	if (!$currentShip || e.target !== $positionField) return
// 	if (isCoordIncludes(ships) || itCanFit(shipSize, shipX, shipY)) return

// 	const $ship = createShip($positionField, [shipIcon, '_tagged'])
// 	const shipData = {
// 		coords: [],
// 	}

// 	setShipSize($ship, positionSize, shipSize)
// 	setShipPosition($ship, shipX, shipY)

// 	for (let i = 0; i < shipSize; i++) {
// 		shipData.coords.push([shipX + positionSize * i, shipY])
// 	}
// 	shipData.item = $ship

// 	ships.push(shipData)

// 	handleRemoveShip()

// 	$currentShip.classList.remove('_selected')
// 	$currentShip.classList.add('_disable')
// 	$currentShip = null

// 	setItemToDB('palyer1Positions', JSON.stringify(ships.map(i => i.coords).flat()))
// 	// ships.map(i => i.coords).flat()
// 	// ships.map(shipsData => shipData.item).forEach($ship => $ship.addEventListener('mousemove', (e) => e.stopPropagation()))
// }

// const handleShipBack = e => {
// 	const { target } = e

// 	if (!target.classList.contains('field__ship')) return

// 	const shipIcon = [...target.classList]
// 		.filter(className => !(className === 'field__ship' || className === '_tagged'))
// 		.reduce((acc, className) => (acc = className), '')

// 	Array.from($positionShipsList.querySelectorAll(`.${shipIcon}`))
// 		.map($icon => $icon.closest('li'))
// 		.filter($ship => $ship.classList.contains('_disable'))[0]
// 		.classList.remove('_disable')

// 	for (let i = 0; i < parseInt(target.style.width) / positionSize; i++) {

// 	}

// 	console.log(target.style.width);

// 	target.remove()
// }

// const createShip = ($parent, className = []) => {
// 	const $ship = document.createElement('span')

// 	$ship.classList.add('field__ship', '_hide')

// 	className.forEach(className => $ship.classList.add(className))

// 	$parent.insertAdjacentElement('beforeend', $ship)

// 	setTimeout(() => $ship.classList.remove('_hide'), 0)

// 	return $ship
// }

// const setShipSize = ($ship, positionSize, shipSize) => {
// 	$ship.style.fontSize = (positionSize / 3) * 2 + 'px'
// 	$ship.style.width = positionSize * shipSize + 'px'
// 	$ship.style.height = positionSize + 'px'
// }

// const setShipPosition = ($ship, x, y) => {
// 	$ship.style.left = x + 'px'
// 	$ship.style.top = y + 'px'
// }

// const isCoordIncludes = ships =>
// 	ships
// 		.map(shipData => shipData.coords)
// 		.flat()
// 		.some(coord => coord[0] === shipX && coord[1] === shipY)

// const itCanFit = (size, shipX, shipY) => {
// 	const res = []

// 	for (let i = 0; i < +size; i++) {
// 		res.push(ships.map(shipData => shipData.coords).flat().some(coords => (coords[0] ===  shipX + positionSize * i) && coords[1] === shipY))
// 	}

// 	return res.some(item => item)
// }
