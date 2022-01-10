import { getItemFromDB } from '../database'
import { $battleLink, $fieldOnPositionSection, $positionShipList, $changePlayerPosition } from '../constants/nodes'
import { playerOne, playerTwo } from '../constants/constants'
import { createElementOnField, setElementSize, setElementPosition, removeElementOnField } from './elementOnField'

let coords
let ships
let $currentShip
let $dragShip
let shipIcon
let shipSize
let shipTop
let shipLeft
let positionSize
let vueSize
let mode

export const setVariablesForPlacemnt = () => {
	coords = playerOne.coords
	ships = playerOne.ships
	positionSize = getItemFromDB('positionSize')
	vueSize = getItemFromDB('vueSize')
	mode = getItemFromDB('mode')
}

export const handleShipSelectionForPlacement = e => {
	const { target } = e
	const { item, icon, size } = target.dataset

	if (item !== 'ship') return
	;[...$positionShipList.children].forEach($ship => $ship.classList.remove('_selected'))

	target.classList.add('_selected')

	$currentShip = target
	shipIcon = icon
	shipSize = size
}

export const handleCreateShipOnField = e => {
	if (!checkForPlacement(e.target)) return

	$dragShip = createElementOnField($fieldOnPositionSection, ['field__ship', '_mobile', shipIcon])

	setElementSize($dragShip, positionSize * shipSize, positionSize)
}

export const handlePositionShipOnField = e => {
	if (!checkForPlacement(e.target)) return

	const { offsetX, offsetY } = e

	shipTop = Math.floor(offsetY / positionSize) * positionSize
	shipLeft = Math.floor(offsetX / positionSize) * positionSize

	if (shipLeft + $dragShip.clientWidth >= vueSize) {
		shipLeft = vueSize - $dragShip.clientWidth
	}

	setElementPosition($dragShip, shipTop, shipLeft)
}

export const handleRemoveShipOnField = e => {
	if (!checkForPlacement(e.target)) return

	removeElementOnField($dragShip)
}

export const handlePlaceShipOnField = e => {
	if (!checkForPlacement(e.target) || idCoordsToken() || !isShipWillFit()) return

	const $ship = createElementOnField($fieldOnPositionSection, ['field__ship', shipIcon])

	setElementSize($ship, positionSize * shipSize, positionSize)
	setElementPosition($ship, shipTop, shipLeft)

	for (let i = 0; i < shipSize; i++) {
		coords.push([shipTop, shipLeft + positionSize * i])
	}

	ships.push($ship)

	removeElementOnField($dragShip)
	resetCurrentShip()
	checkCompletionField()
}

export const handleShipBackFromField = e => {
	if (!e.target.classList.contains('field__ship')) return

	const { target: $ship } = e
	const { top, left, width } = $ship.style

	const currentShipIcon = [...$ship.classList].filter(className => className.startsWith('_icon-')).join('')

	$positionShipList.querySelector(`.${currentShipIcon}`).closest('li').classList.remove('_disable')

	for (let i = 0; i < parseInt(width) / positionSize; i++) {
		coords = coords.filter(coord => !(coord[0] === parseInt(top) && coord[1] === parseInt(left) + positionSize * i))
	}

	removeElementOnField($ship)
}

export const changePlayerPosition = () => {
	resetShipList()

	ships.forEach($ship => removeElementOnField($ship))

	coords = playerTwo.coords
	ships = playerTwo.ships
}

export const resetShipPosition = () => {
	playerOne.ships.forEach($ship => removeElementOnField($ship))
	playerOne.ships.length = 0
	playerOne.coords.length = 0

	playerTwo.ships.forEach($ship => removeElementOnField($ship))
	playerTwo.ships.length = 0
	playerTwo.coords.length = 0

	$battleLink.classList.add('_disable')
	$changePlayerPosition.classList.add('_disable')
	
	resetShipList()
	setVariablesForPlacemnt()
}

const checkForPlacement = target => !!$currentShip && target === $fieldOnPositionSection

const idCoordsToken = () => coords.some(coord => coord[0] === shipTop && coord[1] === shipLeft)

const isShipWillFit = () => {
	const res = []

	for (let i = 0; i < shipSize; i++) {
		res.push(coords.some(coords => coords[0] === shipTop && coords[1] === shipLeft + positionSize * i))
		res.push(coords.some(coords => coords[0] === shipTop + +positionSize && coords[1] === shipLeft + positionSize * i))
		res.push(coords.some(coords => coords[0] === shipTop - positionSize && coords[1] === shipLeft + positionSize * i))
	}
	for (let i = 0; i < 3; i++) {
		res.push(coords.some(coords => coords[0] === shipTop - positionSize + positionSize * i && coords[1] === shipLeft - positionSize))
		res.push(
			coords.some(
				coords => coords[0] === shipTop - positionSize + positionSize * i && coords[1] === shipLeft + shipSize * positionSize
			)
		)
	}

	return !res.some(item => item)
}

const resetCurrentShip = () => {
	$currentShip.classList.remove('_selected')
	$currentShip.classList.add('_disable')
	$currentShip = null
}

const checkCompletionField = () => {
	if (!isCompletionField()) return

	if (mode === 'bot' || $changePlayerPosition.classList.contains('_hide')) {
		$battleLink.classList.remove('_disable')
	} else if (mode === 'friend') {
		$changePlayerPosition.classList.remove('_disable')
	}
}

const isCompletionField = () => [...$positionShipList.children].every($ship => $ship.classList.contains('_disable'))

const resetShipList = () => [...$positionShipList.children].forEach($ship => $ship.classList.remove('_disable'))
