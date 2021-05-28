// @ts-check

'use-strict'

const Jimp = require('jimp')

const resize = () => {
  // open a file called "lenna.png"
  Jimp.read('./img/aem-pr-request.jpg', (err, lenna) => {
    // if(file)
    if (err) throw err
    lenna
      .resize(256, Jimp.AUTO) // resize
      .quality(60) // set JPEG quality
      .write('./www/images/aem-bw.jpg') // save
    // console.log(lenna)
  })
}

module.exports = {
  resize
}
