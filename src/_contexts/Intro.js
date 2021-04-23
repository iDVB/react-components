import React, { useState } from 'react'

const IntroContext = React.createContext()

const IntroProvider = ({ children }) => {
  const [skipIntro, setSkipIntro] = useState(false)

  const value = { skipIntro, setSkipIntro }
  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>
}

const useIntroContext = () => {
  const context = React.useContext(IntroContext)
  if (context === undefined) {
    throw new Error('useIntroContext must be used within a IntroProvider')
  }
  return context
}

export { IntroProvider, useIntroContext }
