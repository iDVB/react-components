import React, { useEffect, useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const EnhancedContext = React.createContext()

const STORAGE_KEY = 'isEnhanced'

const EnhancedProvider = ({ children }) => {
  const [enhanced, setEnhanced] = useState(true)
  const [hasInitialized, setHasInitialized] = useState(false)
  const toggleEnhanced = (value) => {
    typeof value === 'boolean' && setEnhanced(value)
  }

  const value = { enhanced, toggleEnhanced }

  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  useEffect(() => {
    if (hasInitialized && enhanced !== null) {
      window.localStorage.setItem(STORAGE_KEY, enhanced)
    }
  }, [enhanced, hasInitialized])

  useEffect(() => {
    const storage = window.localStorage.getItem(STORAGE_KEY)
    const storageValue = storage !== null ? storage === 'true' : true
    const initialValue = !prefersReducedMotion ? storageValue : null
    setEnhanced(initialValue)
    setHasInitialized(true)
  }, [enhanced, prefersReducedMotion])

  return (
    <EnhancedContext.Provider value={value}>
      {children}
    </EnhancedContext.Provider>
  )
}

const useEnhancedContext = () => {
  const context = React.useContext(EnhancedContext)
  if (context === undefined) {
    throw new Error('useEnhancedContext must be used within a EnhancedProvider')
  }
  return context
}

export { EnhancedProvider, useEnhancedContext }
