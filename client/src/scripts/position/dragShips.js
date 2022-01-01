// import { $positionShipsList } from './totalShips'

// const $positionField = document.querySelector('#positionField')

// export const dragShipStart = () => {
// 	const positionShips = document.querySelectorAll('[data-item="ship"]')

// 	positionShips.forEach($ship => $ship.addEventListener('dragstart', dragStart))

// 	$positionShipsList.addEventListener('dragover', e => e.preventDefault())
// 	$positionField.addEventListener('dragover', e => e.preventDefault())

// 	$positionShipsList.addEventListener('drop', drag)
// 	$positionField.addEventListener('drop', drag)
// }

// const dragStart = e => {
// 	e.dataTransfer.setData('id', e.target.id)
//   console.log('start');
// }

// const drag = e => {
// 	let id = e.dataTransfer.getData('id')
//   console.log(e.target);
//   console.log(document.querySelector(id));
// 	e.target.append(document.querySelector(id))
// }
