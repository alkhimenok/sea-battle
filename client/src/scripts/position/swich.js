import { getItemFromDB, setItemToDB } from '../dataBase'

const mode = getItemFromDB('mode')
const $positionTransitionLink = document.querySelector('#positionTransitionLink')

const checkMode = () => {
  if (mode === 'bot') return // startBot()

  $positionTransitionLink.addEventListener
}