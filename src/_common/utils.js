import { getImage } from 'gatsby-plugin-image'

export const isBrowser = typeof window !== 'undefined'

export const capitalize = (word) =>
  typeof word === 'string' ? word.charAt(0).toUpperCase() + word.slice(1) : word

export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getDataFromJsonQuery = (data, rootNodeName) => {
  try {
    return data[rootNodeName].edges.map((item) => item.node)
  } catch (err) {
    console.log(`Error parsing JSON data for ${rootNodeName}`, err)
    return []
  }
}

export const isIntersectionObserverSupported = () => {
  return (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype
  )
}

export const calcPageFillRadius = (x, y, windowWidth, windowHeight) => {
  const l = Math.max(x - 0, windowWidth - x)
  const h = Math.max(y - 0, windowHeight - y)
  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2))
}

export const getDevicePixelRatio = (maxDpr = 2.0) =>
  isBrowser
    ? Math.min(
        Math.max(Math.round(window.devicePixelRatio), 1),
        maxDpr
      ).toFixed(1)
    : '1.0'

export const reduceImages = (edges) =>
  edges.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.node.name]: getImage(cur.node),
    }),
    {}
  )

export const groupBy = (data, type) =>
  data.reduce((acc, cur) => {
    cur[type].forEach((t) => {
      if (!acc[t]) acc[t] = []
      acc[t].push(cur)
    })
    return acc
  }, {})
