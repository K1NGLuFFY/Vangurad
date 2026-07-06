const fs = require('fs');
const path = require('path');
const https = require('https');

const videoDir = path.join(__dirname, '..', 'public', 'videos');
const videoDest = path.join(videoDir, 'hero-construction.mp4');

if (!fs.existsSync(videoDir)) {
  fs.mkdirSync(videoDir, { recursive: true });
}

// Construction video URL from Mixkit (royalty-free)
const videoUrl = 'https://raw.githubusercontent.com/balena-io-examples/coral-streaming-object-detector/master/edge-logic/video/construction.mp4';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    
    const parsedUrl = new URL(url);
    const options = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname + parsedUrl.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://mixkit.co/'
      }
    };

    https.get(options, (response) => {
      // Handle redirect
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        console.log(`Redirecting to: ${response.headers.location}`);
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (Status Code: ${response.statusCode})`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${path.basename(dest)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading video with User-Agent...');
  try {
    await downloadFile(videoUrl, videoDest);
    console.log('Video download completed successfully.');
  } catch (error) {
    console.error('Failed to download video:', error.message);
  }
}

run();
