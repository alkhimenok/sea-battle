import { smoothTo } from './smoothMove'

export const transitionsNavs = document.querySelectorAll('[data-nav="transitions"]')

const $body = document.body

export const addMoveHandler = (e) => {
  const { target } = e
  const { dataset } = target

  if (target.tagName !== 'A') return

  if (target.id === 'bot') {
    localStorage.setItem('mode', 'bot')
  } else if (target.id === 'friend') {
    localStorage.setItem('mode', 'friend')
  }

  $body.classList.add('_hide')

  setTimeout(() => {
    $body.classList.remove('_hide')
    smoothTo(dataset.href)
  }, 400)

  e.preventDefault()
}
