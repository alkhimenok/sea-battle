import { getItemFromDB, changeValueIfNotInDB, replaceItemInDB } from './database'
import { $totalWins, $totalLosses } from './constants/nodes'
import { statsInpuList } from './constants/nodeLists'

export const setStats = () => {
	statsInpuList.forEach($input => changeValueIfNotInDB($input.id, 0))

	assignStats()
}

export const changeStats = flag => {
	if (flag === 'win') {
		replaceItemInDB($totalWins.id, +getItemFromDB($totalWins.id) + 1)
	} else if (flag === 'lose') {
		replaceItemInDB($totalLosses.id, +getItemFromDB($totalLosses.id) + 1)
	}

	assignStats()
}

const assignStats = () => {
	statsInpuList.forEach($input => ($input.value = getItemFromDB($input.id)))
}
