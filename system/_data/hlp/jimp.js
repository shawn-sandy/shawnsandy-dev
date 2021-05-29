// @ts-check

const Jimp = require('jimp')

const img = ($img = 'aem-pr-request.jpg', $options = {}) => {
  const width = $options.width || 1280
  const height = $options.width || Jimp.AUTO
  const srcDir = $options.srcDir || './img/'
  const outputDir = $options.outputDir || './www/images/'
  const outputCache = $options.outputDir || './images/min/'

  Jimp.read(`${srcDir}${$img}`, (err, lenna) => {
    if (err) throw err
    lenna
      .resize(width, height)
      .quality(60)
      .write(`${outputDir}${$img}`)
      .write(`${outputCache}${$img}`)
    // console.log(lenna)
  })
  return `./images/${$img}`
}

module.exports = {
  img
}
