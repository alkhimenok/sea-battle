import 'normalize.css'
import './styles/main.scss'

import { transitionsNavs, addMoveHandler } from './scripts/transitions/move'
import {  } from './scripts/size/numberOfShits'

const start = () => {
  transitionsNavs.forEach($nav => $nav.addEventListener('click', addMoveHandler))
}

window.addEventListener('load', start)