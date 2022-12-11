// @ts-check

'use strict'

const take = require('lodash.take')

const date = new Date()

const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')

const formattedDate = (date) => dayjs(date).format('MMMM DD, YYYY')

const timeAgo = (date) => {
  dayjs.extend(relativeTime)
  return dayjs(date).fromNow()
}

const currentYear = () => date.getFullYear()

const formatDate = (date) => new Date(date).toDateString()

const stripHtml = (data = null) => {
  if (data === null || data === undefined) return
  return data.replace(/(<([^>]+)>)/gi, '')
}

const limit = ($arr = [], $limit = 3) => {
  if ($arr.length >= 1) {
    if (!$limit || $limit === null) {
      return $arr
    }
    return take($arr, $limit)
  }
  return null
}

const openUrl = (url, label = null) => {
  if (!url) { console.warn('url required'); return }
  return `<a href="${url}" target="_blank" rel="nofollow noopener">${label || url}</a>`
}

module.exports = {
  year: currentYear,
  currentYear,
  formatDate,
  strip: stripHtml,
  stripHtml, // deprecated use strip
  limit,
  timeAgo,
  openUrl,
  formattedDate
}
