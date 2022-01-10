import { smoothTo } from './smoothTransition'
import { checkRoutes } from './routes'

export const handlePageTransition = e => {
	if (e.target.tagName !== 'A') return

	const { target } = e
	const { id, dataset } = target

	smoothTo(dataset.href)
	checkRoutes(id)

	e.preventDefault()
}
