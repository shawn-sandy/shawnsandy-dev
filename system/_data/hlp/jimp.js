// @ts-check

'use-strict'

const img = require('jimp')

const jimp = async (images = 'https://source.unsplash.com/random', width = '', height = Jimp.AUTO, quality) => {
  await Promise.all(
    images.map(async (imgPath) => {
      const image = await img.read(imgPath)
      await image.resize(width, height)
      // await image.quality(quality)
      await image.writeAsync(imgPath)
    })
  )

  return 'images'
}

module.exports = {
  jimp
}
