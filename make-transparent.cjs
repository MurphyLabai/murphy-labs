const { Jimp } = require('jimp');

(async () => {
  const img = await Jimp.read('public/img/open-btn.png');

  const { width, height } = img.bitmap;
  console.log(`Image: ${width}x${height}`);

  // Make near-black pixels transparent
  img.scan(0, 0, width, height, function (x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    // If pixel is near-black, make it transparent
    if (r < 30 && g < 30 && b < 30) {
      this.bitmap.data[idx + 3] = 0;
    }
  });

  await img.write('public/img/open-btn.png');
  console.log('Done — black background made transparent');
})();
