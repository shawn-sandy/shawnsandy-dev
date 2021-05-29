// @ts-check

const Jimp = require('jimp')
const fs = require('fs')

const img = ($img = 'google-security-check.jpg', options = {}) => {
  const width = options.width || 1280
  const height = options.width || Jimp.AUTO
  const srcDir = options.srcDir || './img/'
  const outputDir = options.outputDir || './www/images/'
  const outputCache = options.outputDir || './images/min/'

  const imagePath = `${outputCache}${$img}`

  try {
    if (!fs.existsSync(imagePath)) {
      Jimp.read(`${srcDir}${$img}`, (err, lenna) => {
        if (err) throw err
        lenna
          .resize(width, height)
          .quality(60)
          .write(`${outputDir}${$img}`)
          .write(`${outputCache}${$img}`)
        console.log(lenna)
      })
    } else {
      console.log(`Image already exist ${imagePath}`)
    }

    return `/images/${$img}`
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  img
}
