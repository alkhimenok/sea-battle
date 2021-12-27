export const operatorsForm = document.querySelectorAll('[data-form="ships"]')

const MAX_VALUE = 10

export const changeCountShipsHandler = (e) => {
	const { target, currentTarget: $form } = e
	const { id, value: $value, plus: $plus, minus: $minus } = $form

	if (target.tagName !== 'BUTTON' || target.classList.contains('_disable')) return
	
	$value.value = target === $plus ? +$value.value + 1 : +$value.value - 1

	if (+$value.value === 0) { 
		$minus.classList.add('_disable')
	} else {
		$minus.classList.remove('_disable')
	}

	if (+$value.value === MAX_VALUE) {
		$plus.classList.add('_disable')
	} else {
		$plus.classList.remove('_disable')
	}

	e.preventDefault()

	localStorage.setItem(id, $value.value)
}