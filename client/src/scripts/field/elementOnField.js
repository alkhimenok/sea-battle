export const createElementOnField = ($parent, classNameList = []) => {
	const $element = document.createElement('span')

	$element.classList.add('_icon', '_hide')

	classNameList.forEach(className => $element.classList.add(className))

	$parent.insertAdjacentElement('beforeend', $element)

	setTimeout(() => $element.classList.remove('_hide'), 0)

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

export const removeElementOnField = ($element) => {
  $element.classList.add('_hide')

	setTimeout(() => $element.remove(), 200)
}