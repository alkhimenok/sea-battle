import { smoothTo } from './smoothTransition'

export const handlePageTransition = e => {
	const { target } = e
	const { dataset } = target

	if (target.tagName !== 'A') return

	smoothTo(dataset.href)
	checkRoutes(target.id)

	e.preventDefault()
}

const checkRoutes = id => {
	// if (id === 'botTransitionLink') {
	// 	setItemToDB('mode', 'bot')
	// } else if (id === 'friendTransitionLink') {
	// 	setItemToDB('mode', 'friend')
	// } else if (id === 'statsTransitionLink') {
	// 	setStats()
	// } else if (id === 'positionTransitionLink') {
	// 	fillpositionShipsList()
	// }
}
