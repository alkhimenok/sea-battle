import { LITTLE_DELAY, DELAY } from '../constants/constants'

export const createElementOnField = ($parent, classNameList = []) => {
	const $element = document.createElement('span')

	$element.classList.add('_icon', '_hide')

	classNameList.forEach(className => $element.classList.add(className))

	$parent.insertAdjacentElement('beforeend', $element)

	setTimeout(() => $element.classList.remove('_hide'), LITTLE_DELAY)

	return $element
}

export const setElementSize = ($element, widht, height) => {
	$element.style.fontSize = (height / 3) * 2 + 'px'
	$element.style.width = widht + 'px'
	$element.style.height = height + 'px'
}

export const setElementPosition = ($element, top, left) => {
	$element.style.top = top + 'px'
	$element.style.left = left + 'px'
}

export const showElementOnField = ($parent, $element) => {
	$parent.insertAdjacentElement('beforeend', $element)

	setTimeout(() => $element.classList.remove('_hide'), DELAY)
}

export const removeElementOnField = $element => {
	$element.classList.add('_hide')

	setTimeout(() => $element.remove(), DELAY)
}
