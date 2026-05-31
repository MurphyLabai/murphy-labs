import Jimp from 'jimp';

const img = await Jimp.read('public/img/open-btn.png');

const { width, height } = img.bitmap;
console.log(`Image: ${width}x${height}`);

// Make black (#000000) pixels transparent
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const pixel = img.getPixelColor(x, y);
    const { r, g, b, a } = Jimp.intToRGBA(pixel);
    if (r < 30 && g < 30 && b < 30) {
      img.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 0), x, y);
    }
  }
}

await img.writeAsync('public/img/open-btn.png');
console.log('Done — black background made transparent');
