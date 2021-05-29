// @ts-check

const Jimp = require('jimp')
const fs = require('fs')

const img = ($img = 'google-security-check.jpg', options = {}) => {
  const width = options.width || 1280
  const height = options.width || Jimp.AUTO
  const srcDir = options.srcDir || './img/'
  const outputDir = options.outputDir || './www/images/'
  const outputCache = options.outputDir || './images/min/'
  const quality = options.quality || 80
  const imagePath = `${outputCache}${$img}`

  try {
    if (!fs.existsSync(imagePath) && options.force) {
      Jimp.read(`${srcDir}${$img}`, (err, lenna) => {
        if (err) throw err
        lenna
          .resize(width, height)
          .quality(quality)
          .write(`${outputDir}${$img}`)
          .write(`${outputCache}${$img}`)
        // console.log(lenna)
      })
    } else {
      console.log(`Seems image already exist ${imagePath}`)
    }

    return `/images/${$img}`
  } catch (error) {
    console.info(error)
  }
}

module.exports = {
  img
}
