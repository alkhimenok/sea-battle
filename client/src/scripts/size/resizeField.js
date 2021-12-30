export const $fieldSizeRange = document.querySelector('#fieldSizeRange')

const $size = document.querySelector('#size')
const $fieldLabel = $size.querySelector('#fieldLabel')

export const startFieldResize = () => {
	$size.classList.add('_resize')
}

export const changeFieldSize = e => {
	const { value } = e.target

	$fieldLabel.textContent = `${value}x${value}`
}

export const endFieldResize = e => {
	$size.classList.remove('_resize')

	localStorage.setItem(e.target.id, e.target.value)
}
