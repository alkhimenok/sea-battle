export const smoothTo = selector => {
	const neededSection = document.querySelector(selector)
	const indentTop = neededSection.getBoundingClientRect().top + scrollY

	window.scrollTo({ top: indentTop }) //, behavior: 'smooth'
}