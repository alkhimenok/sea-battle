import { $body, $playerSavedName } from '../constants/nodes'
import { handlePageTransition } from '../transitions/transition'
import { resetGame } from './resetGame'

export const showCongratulation = () => {
	const congratulationModal = getcongratulationModal($playerSavedName.value + ', you won!', 'Great game! again?')

	$body.insertAdjacentHTML('afterbegin', congratulationModal)

	setTimeout(() => {
		const $modal = $body.querySelector('#modal')
		const $modalNav = $modal.querySelector('#modalNav')

		$modal.classList.add('_show')

		$modalNav.addEventListener('click', handlePageTransition)
		$modalNav.addEventListener('click', () => {
			$modal.classList.remove('_show')

      resetGame()

			setTimeout(() => $modal.remove(), 600)
		})
	}, 0)
}

const getcongratulationModal = (name, message) => {
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
