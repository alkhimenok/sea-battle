import { setShipsPosition } from './position'
import { handlePlaceMark, setMarkPosition } from '../fiels/attack'

export const $changeTransitionLink = document.querySelector('#changeTransitionLink')
const $enemyField = document.querySelector('#enemyField')
const $myField = document.querySelector('#myField')


export const setPlayer = (player1, player2) => {
	let currentPlayer = player1
	let nocurrentPlayer = player2

	setShipsPosition(currentPlayer.ships)

	$changeTransitionLink.addEventListener('click', () => {
		currentPlayer = currentPlayer === player1 ? player2 : player1
		nocurrentPlayer = currentPlayer === player1 ? player2 : player1

		setShipsPosition(currentPlayer.ships)
    nocurrentPlayer.shots.forEach(shot => $myField.insertAdjacentElement('beforeend', shot))
    currentPlayer.shots.forEach(shot => $enemyField.insertAdjacentElement('beforeend', shot))

    // currentPlayer.shots

		// setMarkPosition(currentPlayer.ships)
	})
	$enemyField.addEventListener('click', e => {
		console.log(e.target, e.currentTarget)
		handlePlaceMark(currentPlayer, nocurrentPlayer)
		e.stopPropagation()
	})
}

// const handlePlaceMark = (player1, player2) => {
// 	// if (player1.shots.some(isCoordIncludes)) return
// 	player1.shots.forEach(shot => shot.remove())
// 	player2.shots.forEach(shot => $enemyField.insertAdjacentElement('beforeend', shot))

// 	const classNames = []

// 	if (player2.coords.some(isCoordIncludes)) {
// 		classNames.push('_icon-crossMark')
// 		player2 = player2.coords.filter(coord => !isCoordIncludes(coord))
// 	} else {
// 		classNames.push('_tagged')
// 	}

// 	const $currentMark = createMark(positionSize, classNames)

// 	setMarkPosition($currentMark, dragMarkX, dragMarkY)

// 	player1.shots.push($currentMark)
// 	// markds.push([$currentMark])
// }
