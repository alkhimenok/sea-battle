const operatorsNav = document.querySelectorAll('[data-nav="operators"]')

const MAX_VALUE = 10

operatorsNav.forEach($nav => {
	const $value = $nav.querySelector('[data-operators="value"]')
	const $plus = $nav.querySelector('[data-operators="plus"]')
	const $minus = $nav.querySelector('[data-operators="minus"]')

	$nav.addEventListener('click', e => {
		const currentValue = +$value.textContent
		const { target } = e

    // if (target.tagName !== 'BUTTON') return

		// if (target === $plus && !target.classList.contains('_disable')) {
		// 	$value.textContent = currentValue + 1
		// } else if (target === $minus && !target.classList.contains('_disable')) {
		// 	$value.textContent = currentValue - 1
		// }

    // if (currentValue === 1 || currentValue === MAX_VALUE) {
		// 	target.classList.add('_disable')
		// } else {
		// 	$minus.classList.remove('_disable')
		// 	$plus.classList.remove('_disable')
		// }
	})
})
