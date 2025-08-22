const fs = require('fs');
const sharp = require('sharp');
const toIco = require('to-ico');

async function generateFavicon() {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24">
  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="#a8d5ba" stroke="none"/>
</svg>
  `;

  const sizes = [16, 32, 48];

  const buffers = await Promise.all(
    sizes.map(async (size) => {
      return sharp(Buffer.from(svg))
        .resize(size, size)
        .png()
        .toBuffer();
    })
  );

  const ico = await toIco(buffers);
  fs.writeFileSync('app/favicon.ico', ico);
  console.log('Favicon generated successfully!');
}

generateFavicon().catch(console.error);
