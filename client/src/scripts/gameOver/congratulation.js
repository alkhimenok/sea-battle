import { $body } from '../constants/nodes'
import { LITTLE_DELAY, LONG_DELAY } from '../constants/constants'
import { handlePageTransition } from '../transitions/transition'
import { resetGame } from './resetGame'

export const showCongratulation = (name, message) => {
	const congratulationModal = getCongratulationModal(name, message)

	$body.insertAdjacentHTML('afterbegin', congratulationModal)

	setTimeout(() => {
		const $modal = $body.querySelector('#modal')
		const $modalNav = $modal.querySelector('#modalNav')

		$modal.classList.add('_show')

		$modalNav.addEventListener('click', handlePageTransition)
    
		$modal.onclick = (e) => {
			if (e.target.tagName !== 'A') return

			$modal.classList.remove('_show')

			resetGame()

			setTimeout(() => $modal.remove(), LONG_DELAY)

      $modal.onclick = null
		}
	}, LITTLE_DELAY)
}

const getCongratulationModal = (name, message) => {
	return `
      <div class="modal" id="modal">
        <div class="modal__body">
          <h3 class="modal__title _title">
            ${name}
          </h3>
          <p class="modal__description">
            ${message}
          </p>
          <nav class="modal__nav" id=modalNav>
            <a class="modal__btn _square-btn _red" href="#start" data-href="#start">
              <span class="modal__icon _icon _icon-logOff"></span>
            </a>
            <a class="modal__btn _square-btn" href="#size" data-href="#size">
              <span class="modal__icon _icon _icon-change"></span>
            </a>
          </nav>
        </div>
      </div>
    `
}
