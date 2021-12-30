import { drawField } from '../fiels/draw'

export const $fieldSizeRange = document.querySelector('#fieldSizeRange')

const $size = document.querySelector('#size')
const $fieldLabel = $size.querySelector('#fieldLabel')

export const startFieldResize = () => $size.classList.add('_resize')

export const changeFieldSize = e => {
	const { value } = e.target

	$fieldLabel.textContent = `${value}x${value}`

	localStorage.setItem(e.target.id, e.target.value)

	drawField(document.querySelector('#canvasSize'))
}

export const endFieldResize = e => $size.classList.remove('_resize')
