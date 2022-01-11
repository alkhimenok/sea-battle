import { $body } from '../constants/nodes'
import { LITTLE_DELAY, LONG_DELAY } from '../constants/constants'
import { resetGame } from '../gameOver/resetGame'
import { saveGameData } from './playerData'

export const showSaveModal = () => {
	const saveModal = getSaveModal()

	$body.insertAdjacentHTML('afterbegin', saveModal)

	setTimeout(() => {
		const $modal = $body.querySelector('#modal')
		const $modalNav = $modal.querySelector('#modalNav')
		const $saveProgress = $modal.querySelector('#saveProgress')

		$modal.classList.add('_show')

		$modalNav.onclick = e => {
			if (e.target.tagName !== 'A') return

			$modal.classList.remove('_show')

			setTimeout(() => $modal.remove(), LONG_DELAY)
			
			resetGame()

			$modalNav.onclick = null
		}

		$saveProgress.onclick = () => {
			saveGameData()

			$saveProgress.onclick = null
		}
	}, LITTLE_DELAY)
}

const getSaveModal = () => {
	return `
      <div class="modal" id="modal">
        <div class="modal__body">
          <h3 class="modal__title _title">
            Save the game?
          </h3>
          <p class="modal__description">
            After saving the game can be continued.
          </p>
          <nav class="modal__nav" id=modalNav>
            <a class="modal__btn _square-btn _red" href="#start" data-href="#start">
              <span class="modal__icon _icon _icon-logOff"></span>
            </a>
            <a class="modal__btn _square-btn" id="saveProgress" href="#start" data-href="#start">
              <span class="modal__icon _icon _icon-save"></span>
            </a>
          </nav>
        </div>
      </div>
    `
}
