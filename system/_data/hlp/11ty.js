//@ts-check
'use strict'

const take = require("lodash.take")

const date = new Date()

const currentYear = () => date.getFullYear()

const formatDate = (date) => new Date(date).toDateString()

const stripHtml = (data = null) => {
  if (data === null || data === undefined) return
  return data.replace(/(<([^>]+)>)/ig, '')
}

const _take = ($arr = [], $limit = 3) => {
  if ($arr.length >= 1)
    return take($arr, $limit)
  return []
}

module.exports = {
  year: currentYear,
  formatDate: formatDate,
  strip: stripHtml,
  noHtml: stripHtml,
  take: _take

}
