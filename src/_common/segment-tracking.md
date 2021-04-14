# Segment Tracking Setup

This is a quick overview of how you can migrate a project over to use segment instead of the old trackEvent function. This is built in a way that you can migrate sites one at a time, so you don't need to go all in at once.

Segment integrates with our current Consent context, and so if a user has previously opted in or out of cookies, there are no changes required to make this work.

## Integrating into a new site
For a reference, you can look at how it was implemented on careers. [LINK TO PR](https://github.com/KlickMarketing/klick-careers/pull/131/files).

These are the basic steps you will need to take to getting a new property set up with segment.
- gatsby-browser: add tracking.page() call to onRouteUpdate
- remove the google-gtag plugin from gatsby-config, since this will be handled by segment now.
- add a new JavaScript source in [segment](https://app.segment.com/klick/sources). You may want one for dev, and one for prod for each site. Also set up their destinations.
- .env: add your dev source's Write Key (from segment) to your environment variables as GATSBY_SEGMENT_KEY
- vars.yml: add SEGMENT_KEY variable to necessary environments, using your dev and prod Segment Write Keys
- serverless.yml: add SegmentKey to the "custom.exportOutputs.include" section. See linked PR above for reference.
- gatsby-ssr: add the SegmentScript component to the setHeadComponents array
- find/replace any trackEvent calls with new tracking.track syntax, and name each event (more details below)


## New Tracking Syntax: tracking.track()

This is a breaking change. You should change any trackEvent calls from just accepting an object to accepting an event name as the first parameter, and an object as the second parameter.

```js
// ⛔️ old syntax
trackEvent({
    category: 'Form Events',
    action: 'Submit Failure',
    label: `Klick Ventures Contact - ${formId}`,
})

// ✅ new syntax
tracking.track('Contact Form Submission Failed', {
    category: 'Form Events',
    action: 'Submit Failure',
    label: `Klick Ventures Contact - ${formId}`,
})
```

Segment recommends that the naming syntax should be `OBJECT => ACTION`.

For example: Contact Form Submission Succeded, Candidate Created, Application Submitted, Payment Failed, etc.

Or if you feel inclined, you can go a step further and use the `Context => Object => Action` syntax, where Context is something like "careers-site", or "klick.com", or "idx-api".

[This article](https://davidwells.io/blog/clean-analytics) by David Wells does a great job of explaining this. I highly recommend reading it.


## Backwards Compatibility

Currently, this is set up to be backwards compatible, so if you still want to just use GA on a project and not segment, and you don't want to set an event name (string) for each event as the first parameter, you can use the following syntax:

```js
// THIS WORKS. Without segment enabled, note that you can choose to omit the first string parameter.
tracking.track({
    category: 'Form Events',
    action: 'Submit Failure',
    label: `Klick Ventures Contact - ${formId}`,
})
```

Still, when you migrate to using segment, that will throw an error (in development only), and will fail silently on production, so you are better off switching to the new call signature as soon as you import the new tracking object.
```js
// THIS IS BETTER. It will mean that it works properly when you enable segment.
tracking.track('Contact Form Submission Failed', {
    category: 'Form Events',
    action: 'Submit Failure',
    label: `Klick Ventures Contact - ${formId}`,
})
```

