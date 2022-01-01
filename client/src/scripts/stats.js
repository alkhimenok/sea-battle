import { getItemFromDB } from './dataBase'

const statsValueList = document.querySelectorAll('[data-input="statsValue"]')

export const setStats = () => {
	statsValueList.forEach($input => ($input.value = getItemFromDB($input.id) || 0))
}
