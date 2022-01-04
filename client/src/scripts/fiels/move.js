export const $enemyField = document.querySelector('#enemyField')

const $canvas = $enemyField.querySelector('canvas')

let $dragMark
let size
let x
let y
const occupiedPositions = []

const enemyPositions = [[0, 0], [0, 24]]

const renderDragMark = () => {
	size = $canvas.dataset.positionSize

	$dragMark = createMark()

	setMarkSize($dragMark)
}

const setDragMarkPosition = e => {
	const { offsetX, offsetY } = e
  
  x = Math.floor(offsetX / size) * size
	y = Math.floor(offsetY / size) * size

  setMarkPosition($dragMark)
}

const removeDragMark = () => {
	$dragMark.classList.add('_hide')

	setTimeout(() => $dragMark.remove(), 200)
}

const placeMark = () => {
	if (occupiedPositions.some(item => item[0] === x && item[1] === y)) return

  const $currentMark = createMark([isPlaceToken()])

  setMarkPosition($currentMark)
	setMarkSize($currentMark)

  occupiedPositions.push([x, y])
}

const isPlaceToken = () => {
  return enemyPositions.some(item => item[0] === x && item[1] === y) ? '_icon-crossMark' : '_tagged'
}

const createMark = (classNames = []) => {
	const $mark = document.createElement('span')

	$mark.classList.add('field__mark', '_icon-okMark', '_hide')

	classNames.forEach(className => $mark.classList.add(className))

	$enemyField.insertAdjacentElement('beforeend', $mark)

	setTimeout(() => $mark.classList.remove('_hide'), 0)

	return $mark
}

const setMarkSize = ($mark) => {
	$mark.style.fontSize = (size / 3) * 2 + 'px'
	$mark.style.width = size + 'px'
	$mark.style.height = size + 'px'
}

const setMarkPosition = ($mark) => {
	$mark.style.left = x + 'px'
	$mark.style.top = y + 'px'
} 

$enemyField.addEventListener('mouseover', renderDragMark)
$enemyField.addEventListener('mousemove', setDragMarkPosition)
$enemyField.addEventListener('mouseout', removeDragMark)

$enemyField.addEventListener('click', placeMark)
