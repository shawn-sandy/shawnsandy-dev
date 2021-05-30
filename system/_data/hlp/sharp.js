
const sharp = require('sharp')
const fs = require('fs')

const img = (imgs = 'google-security-check.jpg', name = null, options = {}) => {
  const _name = imgs.split('.')
  const imgName = name || _name[0].replace('/', '-')
  const width = options.width || 1280
  const format = options.format || 'webp'
  const height = options.width || null
  const srcDir = options.srcDir || './assets/img/'
  const outputDir = options.outputDir || './www/images/'
  const quality = options.quality || 80
  const imageSrc = `${srcDir}${imgs}`
  const imagePath = `${outputDir}${imgName}.${format}`
  const force = options.force || false
  const outputCache = options.cacheDir || './.cache/images/'

  if (!fs.existsSync(imagePath) || force) {
    console.warn('Image processing')
    sharp(`${imageSrc}`)
      .toFormat(format)
      .resize({ width: width, height: height })
      .toFile(`${outputDir}${imgName}.${format}`, (e) => {
        console.log('Error', e)
      }).then(e => {

      })
  } else {
    console.warn('Image exists')
  }
  return `/images/${imgName}.${format}`
}

const imgSrc = (imgs = 'google-security-check.jpg', name = null, options = {}) => {
  return `<img src="${img(imgs, name, options)}" alt="${options.name || name}" />`
}

module.exports = {
  img,
  imgSrc
}
