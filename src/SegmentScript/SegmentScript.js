import React from 'react'

// initSegmentSnippet: Note that we remove the `analytics.load(SEGMENT_KEY)` from this snippet, because that is to be controlled by the consent manager component.
// Docs: https://github.com/segmentio/consent-manager#usage
const initSegmentSnippet = `
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.13.1";
    analytics.load("${process.env.GATSBY_SEGMENT_KEY}")
    }}();
`

const SegmentScript = () => {
  if (!process.env.GATSBY_SEGMENT_KEY)
    throw new Error('process.env.GATSBY_SEGMENT_KEY must exist.')

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: initSegmentSnippet,
      }}
    />
  )
}

export default SegmentScript
