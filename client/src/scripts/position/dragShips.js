// import { $positionShipsList } from './totalShips'

const $positionField = document.querySelector('#positionField')
const $positionCard = document.querySelector('#positionCard')

export const dragShipStart = () => {
	const positionShips = document.querySelectorAll('[data-item="ship"]')

	positionShips.forEach($ship => {
		$ship.addEventListener('dragstart', dragStart)
		// $ship.addEventListener('drag', drag)
		$ship.addEventListener('dragend', dragEnd)
	})

	$positionField.addEventListener('dragover', dragOver)
	// $positionCard.addEventListener('dragover', dragOver)
	// $positionCard.addEventListener('drop', drop)
}

const dragStart = e => {
	const { target, dataTransfer } = e

	dataTransfer.item = target

	dataTransfer.item.classList.add('_drag')
}
// const drag = e => {
// 	console.log(e);
	// const { target, dataTransfer } = e

	// dataTransfer.item = target

	// dataTransfer.item.classList.add('_drag')
// }
const dragEnd = e => {
	const { dataTransfer } = e

	dataTransfer.item.classList.remove('_drag')
}
const dragOver = (e) => {
  e.preventDefault()

	console.log(e.currentTarget.clientX);
	console.log(e);
}

// const drop = (e) => {
//   if (e.target === $positionField) {
//     $positionField.append(e.dataTransfer.item)
//   }
// }
