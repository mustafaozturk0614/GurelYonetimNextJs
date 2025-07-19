'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
import instagramPostsData from '@/data/processed_instagram_data.json';

// Instagram gönderisi için tip tanımı
interface InstagramPost {
    id: string;
    cloudinaryId?: string;
    mediaUrl: string;
    mediaType: 'IMAGE' | 'VIDEO';
    caption: string;
    permalink: string;
    timestamp: string;
    likesCount: number;
    commentsCount: number;
    thumbnailUrl?: string;
    originalType: string;
    shortCode: string;
    hashtags: string[];
    mentions: string[];
    dimensions: {
      width: number;
      height: number;
    },
    owner: {
      fullName: string;
      username: string;
      id: string;
    },
    "location": null,
    "videoInfo": {
      duration: number;
      viewCount: number;
      playCount: number;
    }
}


// Cloudinary public ID'sini alma yardımcı fonksiyonu - Güvenli versiyon
const getCloudinaryPublicId = (url: string | undefined): string => {
    if (!url) {
        console.warn('getCloudinaryPublicId: URL is undefined or null');
        return 'default-image';
    }

    try {
        console.log('url==>:', url);
        const parts = url.split('/');
        const lastPart = parts[parts.length - 1];
        console.log('lastPart==>:', lastPart);
        if (!lastPart) {
            console.warn('getCloudinaryPublicId: Invalid URL format', url);
            return 'default-image';
        }
        
        return lastPart.split('.')[0];
    } catch (error) {
        console.error('getCloudinaryPublicId: Error processing URL', url, error);
        return 'default-image';
    }
};

const InstagramSection: React.FC = () => {
    const [posts] = useState<InstagramPost[]>(() => (instagramPostsData as InstagramPost[]));
    const [visiblePosts, setVisiblePosts] = useState<number>(6);
    const [loading, setLoading] = useState<boolean>(false);

    // Daha fazla post yükleme fonksiyonu
    const loadMore = async () => {
        if (loading || visiblePosts >= posts.length) return;
        
        setLoading(true);
        
        // Yükleme animasyonu için kısa bir gecikme
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setVisiblePosts(prev => Math.min(prev + 6, posts.length));
        setLoading(false);
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Instagram&apos;da Bizi Takip Edin
                    </h2>
                    <p className="text-lg text-gray-600">
                        En son projelerimiz ve güncellemelerimiz için Instagram sayfamızı takip edin
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {posts.slice(0, visiblePosts).map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <a
                                    href={post.permalink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block aspect-square"
                                >
                                    {post.mediaType === 'VIDEO' ? (
                                        <video
                                            id={`video-${post.cloudinaryId}`}
                                            className="w-full h-full object-cover"
                                            poster={post.thumbnailUrl}
                                            loop
                                            muted
                                            playsInline
                                            onMouseEnter={(e) => e.currentTarget.play()}
                                            onMouseLeave={(e) => e.currentTarget.pause()}
                                        >
                                            <source src={post.mediaUrl} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <CldImage
                                        id={`image-${post.cloudinaryId}`}
                                        src={post.mediaUrl}
                                            width={post.dimensions.width}
                                            height={post.dimensions.height}
                                            alt={post.caption || 'Instagram post'}
                                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                                            onError={(e) => {
                                                console.error('CldImage error for post:', post.id, 'URL:', post.mediaUrl);
                                            }}
                                        />
                                    )}
                                    
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            <p className="text-white text-sm px-4 text-center line-clamp-3">
                                                {post.caption}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Daha Fazla Göster Butonu */}
                {visiblePosts < posts.length && (
                    <div className="text-center mt-12">
                        {loading ? (
                            <div className="inline-flex items-center gap-2">
                                <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                                <span className="text-gray-600">Yükleniyor...</span>
                            </div>
                        ) : (
                            <button
                                onClick={loadMore}
                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={loading}
                            >
                                Daha Fazla Göster ({visiblePosts}/{posts.length})
                            </button>
                        )}
                    </div>
                )}

                {/* Tüm gönderiler yüklendiğinde mesaj */}
                {visiblePosts >= posts.length && posts.length > 0 && (
                    <div className="text-center mt-8">
                        <p className="text-gray-500 text-sm">
                            Tüm gönderiler yüklendi
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default InstagramSection; 