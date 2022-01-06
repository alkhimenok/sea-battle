export const setPosition = obj => {
	const $myField = document.querySelector('#myField')

	obj.forEach(item => {
		item.item.classList.add('_hide')

		setTimeout(() => {
			$myField.insertAdjacentElement('beforeend', item.item)

			item.item.classList.remove('_hide')
		}, 200)
	})
}
