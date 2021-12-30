import { shipsFormList } from '../size/numberOfShits'

const $shipList = document.querySelector('#shipList')

export const setShips = () => {
  $shipList.innerHTML = ''

  shipsFormList.forEach($form => {
    const count = localStorage.getItem($form.id)
    const body =  `
      <li class="ships__item">
          <span class="ships__icon _icon-${$form.id}"></span>
      </li>
    `

    for (let i = 0; i < count; i++) {
      $shipList.insertAdjacentHTML('beforeend', body)
    }
  })
}
