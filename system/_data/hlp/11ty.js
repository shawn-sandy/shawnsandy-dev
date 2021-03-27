'use strict'

const date = new Date()

const currentYear = () => date.getFullYear()

const formatDate = (date) => new Date(date).toDateString()

const stripHtml = (content) => content.replace(/(<([^>]+)>)/ig, '')

module.exports = {
  year: currentYear,
  formatDate: formatDate,
  noHtml: stripHtml
}
