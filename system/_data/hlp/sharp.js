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
  const format = options.format || 'jpeg'
  const srcDir = options.srcDir || './assets/img/'
  const outputDir = options.outputDir || './www/images/'
  const imageSrc = `${srcDir}${imgs}`
  const force = options.force || false
  // const quality = options.quality || 80

  if (imgs.length < 0) {
    console.warn('O Images found')
    return
  }

  imgs.map((img) => {
    const _name = img.split('.')
    const imgName = options.name || _name[0]
    const imagePath = `${outputDir}${imgName}.${format}`
    // console.log(imagePath)
    if (!fs.existsSync(imagePath) || force) {
      console.warn(imgName)
      sharp(`${imageSrc}`)
        .toFormat(format)
        .resize({ width: options.width || null, height: options.width || null })
        .toFile(`${outputDir}${imgName}.${format}`, (err, info) => {
          if (err) console.log('Error', err)
          // if (info) console.warn('Info', info)
        })
    }

    return true
  })
}

const img = (imgs = 'google-security-check.jpg', options = {}) => {
  if (!Array.isArray(imgs)) {
    console.error('Image param needs to be array')
    return
  }

  if (imgs.length > 0) {
    resize([imgs[0]], options)
    const imgName = getName(imgs[0])
    return `/${options.imgDir || 'images'}/${imgName}.${options.format || 'jpeg'}`
  }
  return null
}

const imgSrc = (imgs = 'google-security-check.jpg', options = {}) => {
  return `<img src="${img(imgs, options)}" alt="${options.name}"/>`
}

module.exports = {
  img,
  imgSrc,
  resize
}
