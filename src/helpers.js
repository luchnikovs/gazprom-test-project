const setStorage = (storageName, item) => {
  const lsObject = JSON.parse(localStorage.getItem(storageName)) || []

  lsObject.push(item)
  localStorage.setItem(storageName, JSON.stringify(lsObject))
}

const getStorage = (storageName) => {
  return JSON.parse(localStorage.getItem(storageName)) || []
}

export {setStorage, getStorage}