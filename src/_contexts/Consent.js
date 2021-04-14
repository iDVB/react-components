import React from 'react'

import { tracking } from '../_common/tracking'

const ConsentContext = React.createContext()

const STATES = {
  banner: 'banner',
  modal: 'modal',
  hidden: 'hidden',
}

function _useConsent() {
  const [cookiesUIState, setCookiesUIState] = React.useState(STATES.hidden)
  const consentValue = tracking.getConsentValue()

  const isPristine = !consentValue
  const hasConsent = tracking.getHasConsent()

  const isCookieBannerVisible = cookiesUIState === STATES.banner
  const isCookieModalVisible = cookiesUIState === STATES.modal
  const isCookieSettingsHidden = cookiesUIState === STATES.hidden

  function acceptCookies() {
    tracking.optIn()

    tracking.track('Cookies Accepted', {
      category: 'Page Interactions',
      action: 'Privacy Opt In',
      label: 'Cookie Banner',
      value: tracking.getConsentValue(),
    })
  }

  function rejectCookies() {
    tracking.optOut()
  }

  const showCookiesModal = React.useCallback(() => {
    setCookiesUIState(STATES.modal)
  }, [])

  const closeCookiesModal = React.useCallback(() => {
    const nextState = isPristine ? STATES.banner : STATES.hidden
    setCookiesUIState(nextState)
  }, [isPristine])

  const showCookiesBanner = React.useCallback(() => {
    setCookiesUIState(STATES.banner)
  }, [])

  const closeCookiesBanner = React.useCallback(() => {
    setCookiesUIState(STATES.hidden)
  }, [])

  const toggleCookies = hasConsent ? rejectCookies : acceptCookies

  return {
    hasConsent,
    isPristine,
    isCookieBannerVisible,
    isCookieModalVisible,
    isCookieSettingsHidden,
    acceptCookies,
    rejectCookies,
    toggleCookies,
    showCookiesModal,
    closeCookiesModal,
    showCookiesBanner,
    closeCookiesBanner,
  }
}

const ConsentProvider = ({ children }) => {
  const consent = _useConsent()

  return (
    <ConsentContext.Provider value={consent}>
      {children}
    </ConsentContext.Provider>
  )
}

const useConsentContext = () => {
  const context = React.useContext(ConsentContext)
  if (context === undefined) {
    throw new Error('useConsentContext must be used within a ConsentProvider')
  }
  return context
}

export { ConsentProvider, useConsentContext }
