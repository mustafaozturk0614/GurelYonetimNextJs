import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});


const instagramPostsPath = path.join(__dirname, 'src', 'data', 'dataset_instagram-scraper_2025-06-10_14-16-25-957.json');

async function uploadMediaToCloudinary() {
  try {
    const data = fs.readFileSync(instagramPostsPath, 'utf8');
    let posts = JSON.parse(data);

    for (const post of posts) {
      if (post.type === 'Image' && post.displayUrl && !post.cloudinaryImageUrl) {
        console.log(`Attempting to upload image: ${post.displayUrl}`);
        console.log('Current Cloudinary API Key status before image upload:', !!cloudinary.config().api_key);
        try {
          const result = await cloudinary.uploader.upload(post.displayUrl, {
            folder: 'instagram_images', // Cloudinary'de bir klasör belirleyebilirsiniz
          });
          post.cloudinaryImageUrl = result.secure_url;
          console.log(`Uploaded image to: ${result.secure_url}`);
        } catch (uploadError) {
          console.error(`Error uploading image ${post.displayUrl}:`, uploadError.message);
          console.log('url==>:', post.url);
        }
      } else if (post.type === 'Video' && post.videoUrl && !post.cloudinaryVideoUrl) {
        console.log(`Attempting to upload video: ${post.videoUrl}`);
        console.log('Current Cloudinary API Key status before video upload:', !!cloudinary.config().api_key);
        try {
          const result = await cloudinary.uploader.upload(post.videoUrl, {
            resource_type: 'video',
            folder: 'instagram_videos', // Cloudinary'de bir klasör belirleyebilirsiniz
          });
          post.cloudinaryVideoUrl = result.secure_url;
          console.log(`Uploaded video to: ${result.secure_url}`);
        } catch (uploadError) {
          console.error(`Error uploading video ${post.videoUrl}:`, uploadError.message);
          console.log('url==>:', post.url);
        }
      }
    }

    fs.writeFileSync(instagramPostsPath, JSON.stringify(posts, null, 2), 'utf8');
    console.log('JSON file updated with Cloudinary URLs.');
  
  } catch (error) {
    console.error('Error processing Instagram posts:', error);
  }
}

uploadMediaToCloudinary(); 