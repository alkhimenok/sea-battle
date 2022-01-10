export const isWinningMove = (coords, top, left) => {
  coords.forEach((coord, i, arr) => coord[0] === top && coord[1] === left ? coords.splice(i, 1) : coord)

  if (coords.length === 0) alert('endGame')
}