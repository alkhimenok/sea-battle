import { $body } from '../constants/nodes'
import { LONG_DELAY } from '../constants/constants'

export const smoothTo = selector => {
	const $neededSection = document.querySelector(selector)
	const indentTop = $neededSection.getBoundingClientRect().top + scrollY

	$body.classList.add('_hide')

	setTimeout(() => {
		window.scrollTo({ top: indentTop })

		$body.classList.remove('_hide')
	}, LONG_DELAY)
}
