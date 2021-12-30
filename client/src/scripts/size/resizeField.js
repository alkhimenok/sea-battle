import { drawField } from '../fiels/draw'
import {doShips} from './numberOfShits'

export const $fieldSizeRange = document.querySelector('#fieldSizeRange')

const $size = document.querySelector('#size')
const $fieldLabel = $size.querySelector('#fieldLabel')

export const startFieldResize = (e) => {
	$size.classList.add('_resize')
	// if (localStorage.getItem('total') === 'true') {
		
	// 	// e.target.disabled = true
	// } 
	// else {
	// 	e.target.disabled = false
	// }
}

export const changeFieldSize = e => {
	const { value } = e.target

	if (localStorage.getItem('total') === 'true' && value < +localStorage.getItem('fieldSizeRange')) {
		e.target.value = +localStorage.getItem('fieldSizeRange')
	} else {
	$fieldLabel.textContent = `${value}x${value}`

		localStorage.setItem(e.target.id, e.target.value)
		doShips()
		drawField()
	}

}

export const endFieldResize = e => $size.classList.remove('_resize')
