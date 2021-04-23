import { deleteAllCookies } from './cookieUtils'
import {
  getStorageItem,
  setStorageItem,
  storageItemExists,
} from './storageUtils'

const TRACKING_CONSENT_STORAGE_NAME = 'kh_tracking'
const TRACKING_CONSENT_VALUES = {
  accept: 'accept',
  reject: 'reject',
}
const GATSBY_GOOGLE_ANALYTICS_ID = process.env.GATSBY_GOOGLE_ANALYTICS_ID
const disableStr = `ga-disable-${GATSBY_GOOGLE_ANALYTICS_ID}`
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

// user is opting out, setting cookie on document, window and alerting success
const gaOptOut = () => {
  document.cookie = `${disableStr}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`
  window[disableStr] = true
}

const gaOptIn = () => {
  document.cookie = `${disableStr}= ; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
  window[disableStr] = null
}

// NOTE: getHasConsent() - We need to keep this one for use outside of react's render cycle.
const getHasConsent = () => {
  return (
    !storageItemExists(TRACKING_CONSENT_STORAGE_NAME) ||
    getStorageItem(TRACKING_CONSENT_STORAGE_NAME) === 'accept'
  )
}

function getCanTrack() {
  return typeof window !== 'undefined' && getHasConsent()
}

/**
 * @deprecated use tracking.track() instead
 */
const trackEvent = (payload) => {
  if (typeof window === 'undefined' || !getHasConsent() || !window.gtag) return
  if (payload.action || payload.label || payload.category) trackGAEvent(payload)
  if (payload.dcCode) trackDCEvent(payload.dcCode)
}

const trackGAEvent = (payload) => {
  window.gtag('event', payload.action, {
    send_to: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
    event_category: payload.category,
    event_label: payload.label,
    ...(payload.value && { value: payload.value }),
  })
}

const trackDCEvent = (dcCode) => {
  window.gtag('event', 'conversion', {
    allow_custom_scripts: true,
    send_to: `${process.env.GATSBY_GOOGLE_DOUBLECLICK_ID}/${dcCode}`,
    session_id: getStorageItem('session_id'),
  })
}

function noop() {}

function getIsNewSyntax(args) {
  return typeof args[0] === 'string'
}

/**
 * @deprecated use trackingSegment instead
 */
const trackingGA = {
  // page() is a noop because this is actually handled by the gatsby-google-gtag-plugin
  page: noop,
  // identify() is a noop because gtag does not have this functionality
  identify: noop,
  track: (...args) => {
    if (!getCanTrack()) return

    const transformedArgs = getIsNewSyntax(args) ? [args[1]] : args

    trackEvent(...transformedArgs)
  },
  getHasConsent,
  getConsentValue: () => {
    return getStorageItem(TRACKING_CONSENT_STORAGE_NAME)
  },
  optIn: () => {
    setStorageItem(
      TRACKING_CONSENT_STORAGE_NAME,
      TRACKING_CONSENT_VALUES.accept
    )
    gaOptIn()
  },
  optOut: () => {
    setStorageItem(
      TRACKING_CONSENT_STORAGE_NAME,
      TRACKING_CONSENT_VALUES.reject
    )
    gaOptOut()
    deleteAllCookies()
  },
}

const trackingSegment = {
  page: (...args) => {
    if (!getCanTrack()) return

    window.analytics.page(...args)
  },
  identify: (...args) => {
    if (!getCanTrack()) return

    window.analytics.identify(...args)
  },
  track: (...args) => {
    if (!getCanTrack()) return

    if (IS_DEVELOPMENT && !getIsNewSyntax(args)) {
      throw new Error(
        'Invalid tracking.track() call signature. Ensure you pass a string as the first parameter.'
      )
    }

    window.analytics.track(...args)
  },
  getHasConsent,
  getConsentValue: () => {
    return getStorageItem(TRACKING_CONSENT_STORAGE_NAME)
  },
  optIn: () => {
    setStorageItem(
      TRACKING_CONSENT_STORAGE_NAME,
      TRACKING_CONSENT_VALUES.accept
    )
  },
  optOut: () => {
    setStorageItem(
      TRACKING_CONSENT_STORAGE_NAME,
      TRACKING_CONSENT_VALUES.reject
    )
    deleteAllCookies()
  },
}

// const isSegmentEnabled = !!process.env.GATSBY_SEGMENT_KEY
const isSegmentEnabled = false

export const tracking = isSegmentEnabled ? trackingSegment : trackingGA
