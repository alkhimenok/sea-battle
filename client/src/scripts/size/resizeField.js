const $size = document.querySelector('#size')
const $fieldLabel = $size.querySelector('#fieldLabel')

export const startResize = () => {
  $size.classList.add('_resize')
}

export const changeFieldSize = (e) => {
  const { value } = e.target
  
  $fieldLabel.textContent = `${value}x${value}`
}

export const endResize = (e) => {
  $size.classList.remove('_resize')

  localStorage.setItem(e.target.id , e.target.value)
}
