// Adapted from https://usehooks.com/useLocalStorage/
import React from 'react'

import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
  storageItemExists,
} from '../_common/storageUtils'

function getInitialState({ key, initialValue }) {
  try {
    const item = getStorageItem(key)
    return item ? item : initialValue
  } catch (error) {
    console.log(error)
    return initialValue
  }
}

export default function useLocalStorage({ key, initialValue }) {
  const [storedValue, setStoredValue] = React.useState(
    getInitialState({ key, initialValue })
  )

  React.useEffect(() => {
    if (!storedValue && storageItemExists(key)) {
      return removeStorageItem(key)
    }

    if (!storedValue) return

    return setStorageItem(key, storedValue)
  }, [storedValue, key])

  return [storedValue, setStoredValue]
}
