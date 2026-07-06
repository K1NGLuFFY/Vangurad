const fs = require('fs');
const path = require('path');
const https = require('https');

const videoDir = path.join(__dirname, '..', 'public', 'videos');
const imageDir = path.join(__dirname, '..', 'public', 'images');

// Ensure directories exist
if (!fs.existsSync(videoDir)) {
  fs.mkdirSync(videoDir, { recursive: true });
}
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

// Construction video URL from Mixkit (royalty-free)
const videoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-construction-site-with-a-crane-41857-large.mp4';
const videoDest = path.join(videoDir, 'hero-construction.mp4');

// 20 High quality construction images from Unsplash (royalty-free)
const images = [
  { name: 'steel-frame.jpg', url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop' },
  { name: 'crane-sunset.jpg', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop' },
  { name: 'concrete-pour.jpg', url: 'https://images.unsplash.com/photo-1590373977585-f55536f2f0f5?q=80&w=800&auto=format&fit=crop' },
  { name: 'rebar-mesh.jpg', url: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800&auto=format&fit=crop' },
  { name: 'bridge-spans.jpg', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop' },
  { name: 'blueprint.jpg', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop' },
  { name: 'excavator-work.jpg', url: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=800&auto=format&fit=crop' },
  { name: 'steel-welding.jpg', url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop' },
  { name: 'scaffolding.jpg', url: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=800&auto=format&fit=crop' },
  { name: 'road-grading.jpg', url: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=800&auto=format&fit=crop' },
  { name: 'modern-facade.jpg', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
  { name: 'industrial-pipes.jpg', url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop' },
  { name: 'concrete-foundations.jpg', url: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800&auto=format&fit=crop' },
  { name: 'steel-structure.jpg', url: 'https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?q=80&w=800&auto=format&fit=crop' },
  { name: 'worker-boots.jpg', url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop' },
  { name: 'structural-beams.jpg', url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop' },
  { name: 'refinery-night.jpg', url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop' },
  { name: 'safety-vest.jpg', url: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?q=80&w=800&auto=format&fit=crop' },
  { name: 'foundation-pour.jpg', url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop' },
  { name: 'architectural-lines.jpg', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop' }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      // Handle redirect
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
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
  console.log('Downloading video... (this may take a few moments)');
  try {
    await downloadFile(videoUrl, videoDest);
  } catch (error) {
    console.error('Failed to download video:', error.message);
  }

  console.log('Downloading images...');
  for (const img of images) {
    const dest = path.join(imageDir, img.name);
    try {
      await downloadFile(img.url, dest);
    } catch (error) {
      console.error(`Failed to download image ${img.name}:`, error.message);
    }
  }
  console.log('Media downloads completed.');
}

run();
