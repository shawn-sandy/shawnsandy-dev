// @ts-check
const sharp = require('sharp')
const fs = require('fs')

const resize = (imgs = [], options = {}) => {
  const _name = imgs.split('.')
  const imgName = options.name || _name[0].replace('/', '-')
  const width = options.width || 1280
  const format = options.format || 'jpeg'
  const height = options.width || null
  const srcDir = options.srcDir || './assets/img/'
  const outputDir = options.outputDir || './www/images/'
  const imageSrc = `${srcDir}${imgs}`
  const imagePath = `${outputDir}${imgName}.${format}`
  const force = options.force || false
  // const quality = options.quality || 80
  // const outputCache = options.cacheDir || './.cache/images/'

  if (imgs.length < 0) {
    console.warn('O Images found')
    return
  }

  imgs.map(() => {
    if (!fs.existsSync(imagePath) || force) {
      console.warn(imgName)
      sharp(`${imageSrc}`)
        .toFormat(format)
        .resize({ width: width, height: height })
        .toFile(`${outputDir}${imgName}.${format}`, (err, info) => {
          if (err) console.log('Error', err)
          if (info) console.warn('Info', info)
        })
    }

    return true
  })
}
const img = (imgs = 'google-security-check.jpg', options = {}) => {
  const _name = imgs.split('.')
  const imgName = options.name || _name[0].replace('/', '-')
  const width = options.width || 1280
  const format = options.format || 'jpeg'
  const height = options.width || null
  const srcDir = options.srcDir || './assets/img/'
  const outputDir = options.outputDir || './www/images/'
  const quality = options.quality || 80
  const imageSrc = `${srcDir}${imgs}`
  const imagePath = `${outputDir}${imgName}.${format}`
  const force = options.force || false
  const outputCache = options.cacheDir || './.cache/images/'

  if (!fs.existsSync(imagePath) || force) {
    console.warn(imgName)
    sharp(`${imageSrc}`)
      .toFormat(format)
      .resize({ width: width, height: height })
      .toFile(`${outputDir}${imgName}.${format}`, (err, info) => {
        if (err) console.log('Error', err)
        // if (info) console.warn('Info', info)
      })
  }
  return `/images/${imgName}.${format}`
}

const imgSrc = (imgs = 'google-security-check.jpg', name = null, options = {}) => {
  return `<img src="${img(imgs, name, options)}" alt="${options.name || name}" />`
}

module.exports = {
  img,
  imgSrc,
  resize
}
