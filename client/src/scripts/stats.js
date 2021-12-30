const statsValueList = document.querySelectorAll('[data-input="statsValue"]')

export const setStats = () => {
	statsValueList.forEach($input => ($input.value = localStorage.getItem($input.id) || 0))
}
