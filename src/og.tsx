import { ImageResponse } from '@vercel/og';
import fs from 'fs';
import path from 'path';
import logo from './assets/og/logo.png';
import icons from './assets/og/icons.png';
import grid from './assets/og/grid.png';

const MontserratBlack = fs.readFileSync(path.resolve('./src/assets/fonts/Montserrat-Black.ttf'));
const MontserratReqular = fs.readFileSync(path.resolve('./src/assets/fonts/Montserrat-Regular.ttf'));
const logoBase64Url = `data:image/png;base64,${fs.readFileSync('./src/assets/og/logo.png', 'base64')}`;
const iconsBase64Url = `data:image/png;base64,${fs.readFileSync('./src/assets/og/icons.png', 'base64')}`;
const gridBase64Url = `data:image/png;base64,${fs.readFileSync('./src/assets/og/grid.png', 'base64')}`;
const fallbackHeroBgBase64Url = `data:image/png;base64,${fs.readFileSync('./src/assets/hero_bg.png', 'base64')}`;

export async function generateOgImage({ url, image, title, subtitle }: {
  url: URL,
  image?: ImageMetadata
  title: string
  subtitle?: string
}) {
  const heroBgUrl = image ? (new URL(image.src, url.origin)).toString() : fallbackHeroBgBase64Url;

  const html = (
    <div style={{
      height: '100%',
      width: '100%',
      position: 'relative',
      display: 'flex',
      background: '#333333',
      backgroundImage: `url(${heroBgUrl.toString()})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      color: '#fff',
      fontFamily: 'Montserrat Regular',
    }}>

      {/* gradient background */}

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
        background: 'rgba(51, 51, 51, 0.4)',
      }}></div>


      <div style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)'
      }}></div>


      <img
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
        }}
        src={gridBase64Url}
        width={grid.width}
        height={grid.height} />

      <div style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexShrink: 0,
        padding: '3.125rem 5rem',
        justifyContent: 'space-between',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          alignSelf: 'stretch'
        }}>
          <img
            src={logoBase64Url}
            width={logo.width}
            height={logo.height} />

          <img
            src={iconsBase64Url}
            width={icons.width}
            height={icons.height} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0.875rem'
        }}>
          <div style={{
            fontSize: '3.75rem',
            lineHeight: '101.728%',
            fontFamily: 'Montserrat Black'
          }}>{title}</div>

          {subtitle && <div style={{
            fontSize: '2.625rem',
          }}>{subtitle}</div>}
        </div>
      </div>
    </div>
  );

  const resp = new ImageResponse(html, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: 'Montserrat Black',
        data: MontserratBlack.buffer,
        style: 'normal',
      },
      {
        name: 'Montserrat Regular',
        data: MontserratReqular.buffer,
        style: 'normal',
      },
    ],
  });

  // save buffer to file
  const filename = getOgImageNameByUrl(url);
  const buffer = await resp.arrayBuffer();
  const ogImage = saveOgImageBuffer(Buffer.from(buffer), filename);
  return ogImage;
}

export function getOgImageNameByUrl(url: URL): string {
  let pathname = url.pathname;
  if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }
  return pathname.replace(/\//g, '_');
}

function saveOgImageBuffer(buffer: Buffer, filename: string) {
  // check if src/generate_assets folder exists, create it if it doesn't
  const baseDir = path.resolve('./public/');
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir);
  }

  // check if $baseDir/og folder exists, create it if it doesn't
  const ogDir = path.join(baseDir, 'og');
  if (!fs.existsSync(ogDir)) {
    fs.mkdirSync(ogDir);
  }

  // write buffer to $baseDir/og/$filename.png
  const imgPath = path.resolve(ogDir, filename + '.png');
  fs.writeFileSync(imgPath, buffer);

  return path.join('og', filename + '.png');
}
