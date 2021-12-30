export const shipsFormList = document.querySelectorAll('[data-form="ships"]')

const MAX_VALUE = 10

export const changeCountShipsHandler = e => {
	const { target, currentTarget: $form } = e
	const { id, value: $value, plus: $plus, minus: $minus } = $form

	if (target.tagName !== 'BUTTON' || target.classList.contains('_disable')) return

	$value.value = target === $plus ? +$value.value + 1 : $value.value - 1

	localStorage.setItem(id, $value.value)
	
	checkLimitShips($value.value, $plus, $minus)

	e.preventDefault()
}

export const checkLimitShips = (value, $plus, $minus) => {
	if (value == 0) {
		$minus.classList.add('_disable')
	} else {
		$minus.classList.remove('_disable')
	}

	if (value == MAX_VALUE) {
		$plus.classList.add('_disable')
	} else {
		$plus.classList.remove('_disable')
	}
}