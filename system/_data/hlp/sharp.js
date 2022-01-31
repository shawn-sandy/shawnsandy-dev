// @ts-check
const sharp = require('sharp')
const fs = require('fs')

const getName = (img) => {
  const _name = img.split('.')
  const imgName = _name[0].replace('/', '-')
  return imgName
}

/**
 *
 * @param {*} imgs
 * @param {*} options
 * @returns
 */
const resize = (imgs = [], options = {}) => {
  // console.log(options)
  const format = options.format || 'jpg'
  const srcDir = options.srcDir || './assets/img/'
  const outputDir = options.outputDir || './www/images/'
  const force = options.force || false

  if (!Array.isArray(imgs) || imgs.length < 0) {
    console.error('Image error (please ensure img is and array)')
    return
  }

  imgs.map((img, index) => {
    // console.log(index)
    const _name = img.split('.')
    // const imgFormat = img.split('.').pop()
    const getFormat = img.split('.').pop()
    if (!options.format) { options.format = getFormat }
    const imgName = options.name || _name[0]
    const src = `${srcDir}${img}`
    const suffix = options.suffix || ''
    const image = `${outputDir}${imgName}${suffix}.${options.format}`

    if (!fs.existsSync(src)) {
      // console.log(image)
      console.error('Image not found', src)
      return null
    }
    if (!fs.existsSync(image) || force) {
      sharp(`${src}`)
        .toFormat(format)
        .resize({ width: options.width || 1200, height: options.height || null })
        .toFile(`${image}`, (err, info) => {
          if (err) console.log('Error', err)
          if (info) console.warn('Image created', `${image}`)
        })
    }

    return true
  })
}

/**
 *
 * @param {*} imgs
 * @param {*} options
 * @returns
 */
const img = (imgs = ['google-security-check.jpg'], options = {}) => {
  if (imgs.length > 0) {
    resize([imgs[0]], options)
    const getFormat = imgs[0].split('.').pop()
    if (!options.format) { options.format = getFormat }
    const imgName = getName(imgs[0])
    return `/${options.imgDir || 'images'}/${imgName}${options.suffix || ''}.${options.format}`
  }
  return null
}

/**
 *
 * @param {*} imgs
 * @param {*} options
 * @returns
 */
const imgSrc = (imgs = 'google-security-check.jpg', options = {}) => {
  return `<img loading="lazy" src="${img(imgs, options)}" alt="${options.name}"/>`
}

/**
 *
 * @param {*} imgs
 * @returns
 */
const coverImage = (imgs = ['og-cover.png']) => {
  return img(imgs, { width: 800, height: 500, format: 'webp', suffix: '-cover', force: true })
}

module.exports = {
  img,
  imgSrc,
  resize,
  coverImage
}
