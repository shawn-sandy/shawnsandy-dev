// @ts-check

const Jimp = require('jimp')
const fs = require('fs')

const img = (imgs = 'google-security-check.jpg', name = null, options = {}) => {
  const width = options.width || 1280
  const fileName = name || `data-${Date.now()}`
  const height = options.width || Jimp.AUTO
  const srcDir = options.srcDir || './assets/img/'
  const outputDir = options.outputDir || './www/images/'
  const quality = options.quality || 80
  const imageSrc = `${srcDir}${imgs}`
  const imagePath = `${outputDir}${imgs}`
  const force = options.force || false
  const outputCache = options.cacheDir || './.cache/images/'

  try {
    if (!fs.existsSync(`${imagePath}`) && fs.existsSync(imageSrc) || force) {
      console.log('processing image')

      Jimp.read(`${srcDir}${imgs}`, (err, lenna) => {
        if (err) throw err
        lenna
          .resize(width, height)
          .quality(quality)
          .write(`${outputDir}${imgs}`)
          .write(`${outputCache}${imgs}`)
      })
    } else {
      console.log(`Seems image already exist ${imagePath}`)
    }
  } catch (error) {
    console.info(error)
  }
  return `/images/${imgs}`
}

module.exports = {
  img
}
