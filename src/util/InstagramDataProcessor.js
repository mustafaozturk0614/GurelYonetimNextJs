const fs = require('fs');
const path = require('path');

class InstagramDataProcessor {
    constructor() {
        this.rawData = [];
        this.processedData = [];
    }

    // Cloudinary URL'inden ID çıkarma fonksiyonu
    extractCloudinaryId(url) {
        if (!url) return null;
        
        try {
            // URL'den son kısmı al (dosya adı)
            const parts = url.split('/');
            const fileName = parts[parts.length - 1];
            
            // Dosya uzantısını kaldır
            const id = fileName.split('.')[0];
            
            return id;
        } catch (error) {
            console.error('Error extracting Cloudinary ID from URL:', url, error);
            return null;
        }
    }

    // Raw veriyi işleme fonksiyonu
    processRawData(rawData) {
        let result = [];
        rawData.forEach(item => {
            if (item.type === 'Sidecar' && Array.isArray(item.childPosts)) {
                item.childPosts.forEach(child => {
                    const mediaUrl = child.type === 'Video'
                        ? child.cloudinaryVideoUrl
                        : child.cloudinaryImageUrl;
                    if (mediaUrl) {
                        result.push({
                            id: child.id,
                            mediaUrl: mediaUrl,
                            cloudinaryId: this.extractCloudinaryId(mediaUrl),
                            mediaType: child.type === 'Video' ? 'VIDEO' : 'IMAGE',
                            caption: child.caption || item.caption || '',
                            permalink: child.url || item.url,
                            timestamp: item.timestamp,
                            likesCount: child.likesCount || 0,
                            commentsCount: child.commentsCount || 0,
                            thumbnailUrl: child.displayUrl,
                            originalType: child.type,
                            shortCode: child.shortCode,
                            hashtags: child.hashtags || [],
                            mentions: child.mentions || [],
                            dimensions: {
                                width: child.dimensionsWidth,
                                height: child.dimensionsHeight
                            },
                            owner: {
                                fullName: child.ownerFullName,
                                username: child.ownerUsername,
                                id: child.ownerId
                            },
                            location: child.locationName ? {
                                name: child.locationName,
                                id: child.locationId
                            } : null,
                            videoInfo: child.type === 'Video' ? {
                                duration: child.videoDuration,
                                viewCount: child.videoViewCount,
                                playCount: child.videoPlayCount
                            } : null
                        });
                    }
                });
            } else if (item.type === 'Video' || item.type === 'Image') {
                const mediaUrl = item.type === 'Video'
                    ? item.cloudinaryVideoUrl
                    : item.cloudinaryImageUrl;
                if (mediaUrl) {
                    result.push({
                        id: item.id,
                        mediaUrl: mediaUrl,
                        cloudinaryId: this.extractCloudinaryId(mediaUrl),
                        mediaType: item.type === 'Video' ? 'VIDEO' : 'IMAGE',
                        caption: item.caption || '',
                        permalink: item.url,
                        timestamp: item.timestamp,
                        likesCount: item.likesCount || 0,
                        commentsCount: item.commentsCount || 0,
                        thumbnailUrl: item.displayUrl,
                        originalType: item.type,
                        shortCode: item.shortCode,
                        hashtags: item.hashtags || [],
                        mentions: item.mentions || [],
                        dimensions: {
                            width: item.dimensionsWidth,
                            height: item.dimensionsHeight
                        },
                        owner: {
                            fullName: item.ownerFullName,
                            username: item.ownerUsername,
                            id: item.ownerId
                        },
                        location: item.locationName ? {
                            name: item.locationName,
                            id: item.locationId
                        } : null,
                        videoInfo: item.type === 'Video' ? {
                            duration: item.videoDuration,
                            viewCount: item.videoViewCount,
                            playCount: item.videoPlayCount
                        } : null
                    });
                }
            } else {
                console.warn(`Skipping invalid post: ${item.id}, Type: ${item.type}`);
            }
        });
        return result;
    }

    // JSON dosyasını yükleme
    loadFromFile(filePath) {
        try {
            const fullPath = path.resolve(filePath);
            const fileContent = fs.readFileSync(fullPath, 'utf8');
            this.rawData = JSON.parse(fileContent);
            console.log(`Loaded ${this.rawData.length} posts from ${filePath}`);
            return this.rawData;
        } catch (error) {
            console.error('Error loading file:', error);
            throw error;
        }
    }

    // İşlenmiş veriyi dosyaya kaydetme
    saveToFile(processedData, outputPath) {
        try {
            const fullPath = path.resolve(outputPath);
            const jsonContent = JSON.stringify(processedData, null, 2);
            fs.writeFileSync(fullPath, jsonContent, 'utf8');
            console.log(`Saved ${processedData.length} processed posts to ${outputPath}`);
            return true;
        } catch (error) {
            console.error('Error saving file:', error);
            throw error;
        }
    }

    // Ana işleme fonksiyonu
    process(inputFilePath, outputFilePath) {
        try {
            console.log('Starting Instagram data processing...');
            
            // 1. Raw veriyi yükle
            this.loadFromFile(inputFilePath);
            
            // 2. Veriyi işle
            this.processedData = this.processRawData(this.rawData);
            
            // 3. İstatistikleri göster
            this.showStatistics();
            
            // 4. İşlenmiş veriyi kaydet
            this.saveToFile(this.processedData, outputFilePath);
            
            console.log('Processing completed successfully!');
            return this.processedData;
            
        } catch (error) {
            console.error('Processing failed:', error);
            throw error;
        }
    }

    // İstatistikleri gösterme
    showStatistics() {
        const total = this.rawData.length;
        const processed = this.processedData.length;
        const skipped = total - processed;
        
        const imageCount = this.processedData.filter(p => p.mediaType === 'IMAGE').length;
        const videoCount = this.processedData.filter(p => p.mediaType === 'VIDEO').length;
        
        console.log('\n=== Processing Statistics ===');
        console.log(`Total posts: ${total}`);
        console.log(`Processed posts: ${processed}`);
        console.log(`Skipped posts: ${skipped}`);
        console.log(`Images: ${imageCount}`);
        console.log(`Videos: ${videoCount}`);
        console.log('===========================\n');
    }

    // Cloudinary ID'lerini listeleme
    listCloudinaryIds() {
        const ids = this.processedData.map(post => ({
            id: post.id,
            cloudinaryId: post.cloudinaryId,
            mediaType: post.mediaType,
            url: post.mediaUrl
        }));
        
        console.log('Cloudinary IDs:');
        ids.forEach(item => {
            console.log(`${item.mediaType}: ${item.cloudinaryId} (${item.id})`);
        });
        
        return ids;
    }

    // Hatalı Cloudinary ID'lerini bulma
    findInvalidCloudinaryIds() {
        const invalid = this.processedData.filter(post => !post.cloudinaryId);
        
        if (invalid.length > 0) {
            console.log('\nInvalid Cloudinary IDs:');
            invalid.forEach(post => {
                console.log(`ID: ${post.id}, URL: ${post.mediaUrl}`);
            });
        } else {
            console.log('\nAll Cloudinary IDs are valid!');
        }
        
        return invalid;
    }
}

// Kullanım örneği
function processInstagramData() {
    const processor = new InstagramDataProcessor();
    
    const inputFile = './src/data/dataset_instagram-scraper_2025-06-10_14-16-25-957.json';
    const outputFile = './src/data/processed_instagram_data.json';
    
    try {
        const processedData = processor.process(inputFile, outputFile);
        
        // Ek analizler
        processor.listCloudinaryIds();
        processor.findInvalidCloudinaryIds();
        
        console.log('✅ Processing completed successfully!');
        console.log(`📁 Output file: ${outputFile}`);
        
    } catch (error) {
        console.error('❌ Processing failed:', error);
    }
}

// Eğer bu dosya doğrudan çalıştırılırsa
if (require.main === module) {
    processInstagramData();
}

module.exports = InstagramDataProcessor;
