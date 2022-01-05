export const getItemFromDB = key => localStorage.getItem(key)

export const setItemToDB = (key, value) => localStorage.setItem(key, value)

export const isItemInDB = key => !!localStorage.getItem(key)

// export const changeValueIfNotInDB = (key, value) => (!isItemInDB(key) ? setItemToDB(key, value) : null)

// export const replaceItemInDB = (key, value) => localStorage.setItem(key, value)

// export const replaceEachItemsInDB = (keyList, value) => keyList.forEach((key, i) => {
//   localStorage.setItem(key, Array.isArray(value) ? value[i] : value)
// })
