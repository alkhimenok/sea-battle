export const canvasList = document.querySelectorAll('[data-canvas="field"]')

export const drawField = ($canvas) => {
  const ctx = $canvas.getContext('2d')

  const VUEW_WIDTH = $canvas.clientWidth * 2
  const VUEW_HEIGHT = $canvas.clientHeight * 2
  const PRIMARY_COLOR = '#256696'
  const SECONDARY_COLOR = '#a8c6db'
  
  const NUMBER_OF_POSITIONS_PER_LINE = localStorage.getItem('fieldSizeRange') || 10
  
  $canvas.width = VUEW_WIDTH
  $canvas.height = VUEW_HEIGHT

  const POSITION_WIDTH = VUEW_WIDTH / NUMBER_OF_POSITIONS_PER_LINE
  const POSITION_HEIGHT = POSITION_WIDTH

  ctx.clearRect(0, 0, VUEW_WIDTH, VUEW_HEIGHT)

  ctx.beginPath()
  ctx.strokeStyle = SECONDARY_COLOR
  ctx.lineWidth = 1

  for (let i = 0; i < NUMBER_OF_POSITIONS_PER_LINE; i++) {
    for (let j = 0; j < NUMBER_OF_POSITIONS_PER_LINE; j++) {
      ctx.rect(POSITION_WIDTH * j, POSITION_HEIGHT * i, POSITION_WIDTH, POSITION_HEIGHT)
      ctx.stroke()
    }
  }
  
  ctx.beginPath()
  ctx.strokeStyle = PRIMARY_COLOR
  ctx.lineWidth = 2
  ctx.rect(0, 0, VUEW_WIDTH, VUEW_HEIGHT)
  ctx.stroke()
}

// const canvas = document.querySelector('#field')

// const VUEW_WIDTH = canvas.clientWidth * 2
// const VUEW_HEIGHT = canvas.clientHeight * 2
// const PRIMARY_COLOR = '#256696'
// const SECONDARY_COLOR = '#a8c6db'

// const NUMBER_OF_POSITIONS_PER_LINE = 20

// canvas.width = VUEW_WIDTH
// canvas.height = VUEW_HEIGHT

// const trawField = (count) => {
//   const POSITION_WIDTH = VUEW_WIDTH / count
//   const POSITION_HEIGHT = POSITION_WIDTH

//   ctx.clearRect(0, 0, VUEW_WIDTH, VUEW_HEIGHT)

//   ctx.beginPath()
//   ctx.strokeStyle = SECONDARY_COLOR
//   ctx.lineWidth = 1

//   for (let i = 0; i < count; i++) {
//     for (let j = 0; j < count; j++) {
//       ctx.rect(POSITION_WIDTH * j, POSITION_HEIGHT * i, POSITION_WIDTH, POSITION_HEIGHT)
//       ctx.stroke()
//     }
//   }
  
//   ctx.beginPath()
//   ctx.strokeStyle = PRIMARY_COLOR
//   ctx.lineWidth = 2
//   ctx.rect(0, 0, VUEW_WIDTH, VUEW_HEIGHT)
//   ctx.stroke()
// }

// trawField(NUMBER_OF_POSITIONS_PER_LINE)


// let clicks = 10

// document.addEventListener('click', () => {
//   clicks++
//   trawField(clicks)
// })


// // requestAnimationFrame