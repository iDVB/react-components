# Hero

## Project Setup

To use this component in a project, you will need to enable the `"gatsby-source-filesystem"` plugin in your consumer project's `gatsby-config.js` file as follows:

```js
  [{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: 'images',
      path: `${__dirname}/src/assets/images`,
    },
  }]
```

Then you will need to create a "heros" folder in this location, as follows: `/src/assets/images/heros`. Images in this folder should be 1920×898px, and ideally have been run through [tinypng](https://tinypng.com/).

The `imageQuery` prop will need to come from Gatsby's `useStaticQuery` hook. Grab the accompanying example in `./HeroWithImageQuery.sample.js`, and paste it into your consuming codebase, then import `HeroWithImageQuery` from that file instead of directly from this package. This saves you from repeating the query in every instance that you use it.

This is not ideal, but we cannot export static queries from within node_modules, or Gatsby will throw an error. 