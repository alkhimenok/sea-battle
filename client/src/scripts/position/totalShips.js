import { shipsFormList } from '../size/numberOfShits'

const $positionShipsList = document.querySelector('#positionShipsList')

export const fillpositionShipsList = () => {
  $positionShipsList.innerHTML = ''

  shipsFormList.forEach($form => {
    const count = localStorage.getItem($form.id)
    const body =  `
      <li class="ships__item">
          <span class="ships__icon _icon-${$form.id}"></span>
      </li>
    `

    if (count > 100) return

    for (let i = 0; i < count; i++) {
      $positionShipsList.insertAdjacentHTML('beforeend', body)
    }
  })
}
