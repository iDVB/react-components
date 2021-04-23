# People component

## Project Setup

### Setup gatsby's "people" image directory

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

Then you will need to create a "people" folder in this location, as follows: `/src/assets/images/people`.

These photos should ideally have been run through [tinypng](https://tinypng.com/).

The `peopleImages` prop will need to come from Gatsby's `useStaticQuery` hook. Grab the accompanying example in `./PeopleWithImageQuery.sample.js`, and paste it into your consuming codebase, then import `PeopleWithImageQuery` from that file instead of directly from this package. This will saves you from repeating the query in every instance that you use it.

This is not ideal, but we cannot export static queries from within node_modules, or Gatsby will throw an error.

### Set up the "ScrollProvider" context

This component must be run as a child of the `ScrollProvider` context. So you should ensure that it exists in your react tree. The most obvious place to do this would be in `gatsby-browser.js` and `gatsby-ssr.js`.

## Props

### imageType ['full' | 'round']

You can only choose one `imageType` for each instance of the People component.

#### 'full'

The `"full"` option indicates that the photos will be displayed as full-body on larger screens. This will apply to all photos provided in the `imageData` prop.

Images in this format should be `1500×2571px` (weird size I know).

#### 'round'

The `"round"` option indicates thats the photos will be displayed in a circle at all screen sizes. This will apply to all photos provided in the `imageData` prop.

Images in this folder should be a minimum size of `500x500px` (if possible) and square.

### shouldShowNamesInListView [ true | false ]

This will display the names and titles in the list view for each person. It also adds more spacing and changes the layout on mobile to account for the additional text.