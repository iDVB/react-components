export const storageItemExists = (item) =>
  typeof window !== 'undefined' && localStorage.getItem(item) !== null
export const getStorageItem = (item) =>
  typeof window !== 'undefined' && localStorage.getItem(item)
export const setStorageItem = (item, value) =>
  typeof window !== 'undefined' && localStorage.setItem(item, value)
export const removeStorageItem = (item) =>
  typeof window !== 'undefined' && localStorage.removeItem(item)
