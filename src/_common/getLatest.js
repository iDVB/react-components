const URL = require('url')
const xml2js = require('xml2js')
const _maxBy = require('lodash/maxBy')
const axios = require('axios')

let parser

const getDateFromKey = (key) => {
  const date = key.split(/([0-9]{4}-[0-9]{2}-[0-9]{2})\.(.+)$/g)[1]
  return date ? new Date(`${date}T12:00`) : 0
}

const getLatest = async ({ url, prefix }) => {
  parser = parser || new xml2js.Parser()
  const { pathname: delimiter } = URL.parse(url)
  const address = url.split(delimiter)[0]

  return axios({
    url: address,
    params: {
      'list-type': 2,
      delimiter,
    },
  })
    .then(({ data }) => {
      return parser.parseStringPromise(data).then((xmlObj) => {
        const keys =
          xmlObj['ListBucketResult'] && xmlObj['ListBucketResult'].Contents
        const filteredKeys = keys.filter((item) => item.Key[0].includes(prefix))
        const latest = _maxBy(filteredKeys, (o) => getDateFromKey(o.Key[0]))
        const { Key } = latest
        const filename = `${address}/${Key[0]}`
        return { filename, date: getDateFromKey(Key[0]) }
      })
    })
    .catch((err) => {
      console.log('useS3FileLatest ERROR: ', err)
    })
}

module.exports = {
  getLatest,
}
