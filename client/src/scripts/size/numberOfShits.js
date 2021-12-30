export const shipsFormList = document.querySelectorAll('[data-form="ships"]')

let takes = localStorage.getItem('takes') ? +localStorage.getItem('takes') : 20

const shipsTakes = {
	shipOne: 1,
	shipTwo: 2,
	shipThree: 3,
	shipFour: 4,
}

export const changeCountShipsHandler = e => {
	e.preventDefault()

	const { target, currentTarget: $form } = e
	const { id, value: $value, plus: $plus, minus: $minus } = $form

	if (target.tagName !== 'BUTTON' || target.classList.contains('_disable')) return

	$value.value = target === $plus ? +$value.value + 1 : $value.value - 1

	localStorage.setItem(id, $value.value)

	checkLimitShips(target, id, $value.value, $plus, $minus) // $value.value, $plus, $minus
}

export const checkLimitShips = (target, id, value, $plus, $minus) => {
	
	if (target === $plus) {
		takes += shipsTakes[id]
	} else if (target === $minus) {
		takes -= shipsTakes[id]
	}

	localStorage.setItem('takes', takes)

	if (value == 0) {
		$minus.classList.add('_disable')
	} else {
		$minus.classList.remove('_disable')
	}

	doShips()
}

const getDiff = () => Math.floor((localStorage.getItem('fieldSizeRange') ** 2 / 100) * 20 - takes)

export const doShips = () => {
	const diff = getDiff()

	shipsFormList.forEach($form => {
		if (shipsTakes[$form.id] > diff) {
			$form.plus.classList.add('_disable')
		} else {
			$form.plus.classList.remove('_disable')
		}
	})

	return (diff < 1 && diff >= 0) || [...shipsFormList].some($form => $form.plus.classList.contains('_disable'))
		? localStorage.setItem('total', true)
		: localStorage.setItem('total', false)
}
