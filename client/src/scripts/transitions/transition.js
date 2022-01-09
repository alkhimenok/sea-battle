import { smoothTo } from './smoothTransition'
import { checkRoutes } from './routes'

export const handlePageTransition = e => {
	const { target } = e
	const { id, tagName, dataset } = target

	if (tagName !== 'A') return

	smoothTo(dataset.href)
	checkRoutes(id)

	e.preventDefault()
}
