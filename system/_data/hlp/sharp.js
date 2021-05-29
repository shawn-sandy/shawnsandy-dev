// @ts-check

const sharp = require('sharp')

const img = (imgs = 'google-security-check.jpg', name = null, options = {}) => {
  const _name = imgs.split('.')
  const imgName = name || _name[0]
  const width = options.width || 1280
  const format = options.format || 'webp'
  const height = options.width || null
  const srcDir = options.srcDir || './assets/img/'
  const outputDir = options.outputDir || './www/images/'
  const quality = options.quality || 80
  const imageSrc = `${srcDir}${imgs}`
  const imagePath = `${outputDir}${imgs}`
  const force = options.force || false
  const outputCache = options.cacheDir || './.cache/images/'
  try {
    sharp(`${imageSrc}`)
      .resize({ width: width, height: height })
      .toFormat(format)
      .toFile(`${outputDir}${imgName}.${format}`)
      .then((e) => {
        console.log(e)
      })
  } catch (e) {
    console.warn(e)
  }
  console.log(`${outputDir}${imgName}.${format}`)
  return `images/${imgName}.${format}`
}

const metadata = () => {
  const image = sharp('./assets/img/google-security-check.jpg')
  image
    .metadata()
    .then(function (metadata) {
      console.info('sharp', metadata)
      return image
        .resize(Math.round(metadata.width / 2))
        .toFormat('webp')
        .toFile('OutputMeta.webp')
    })
    .then(function (data) {
      console.log(data)
    // data contains a WebP image half the width and height of the original JPEG
    }).catch((err) => console.warn(err))
}

module.exports = {
  img,
  metadata
}
