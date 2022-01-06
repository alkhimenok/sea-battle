export const setShipsPosition = obj => {
	const $myField = document.querySelector('#myField')
	
	$myField.querySelectorAll('.field__ship').forEach($ship => $ship.remove())
	obj.forEach(item => {
		item.classList.add('_hide')

		setTimeout(() => {
			$myField.insertAdjacentElement('beforeend', item)

			item.classList.remove('_hide')
		}, 200)
	})
}
