export const $fieldRange = document.querySelector('#fieldRange')

const $shipFourForm = document.querySelector('#shipFour')
const $shipThreeForm = document.querySelector('#shipThree')
const $shipTwoForm = document.querySelector('#shipTwo')
const $shipOneForm = document.querySelector('#shipOne')

export const checkMemorySize = () => {
	$fieldRange.value = localStorage.getItem($fieldRange.id) || 10

	$shipFourForm.value.value = localStorage.getItem($shipFourForm.id) || 1
	$shipThreeForm.value.value = localStorage.getItem($shipThreeForm.id) || 2
	$shipTwoForm.value.value = localStorage.getItem($shipTwoForm.id) || 3
	$shipOneForm.value.value = localStorage.getItem($shipOneForm.id) || 4
}
