import { Client, PlaceReview } from '@googlemaps/google-maps-services-js';

interface GoogleReview {
  time: number;
  rating: number;
}

// Google Places API istemcisini oluştur
const client = new Client({});

// İşletmenizin Place ID'si (Google My Business'tan alabilirsiniz)
// Aşağıdaki satırı kendi işletmenizin Place ID'si ile doldurun
// Örnek: ChIJI-ZL6-mXsBQRnnk44NbOkdk
const PLACE_ID = 'ChIJI-ZL6-mXsBQRnnk44NbOkdk'; // <-- Buraya kendi Place ID'nizi yazın

// API anahtarınız (Google Cloud Console'dan alabilirsiniz)
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export interface ReviewStats {
  rating: number;
  totalReviews: number;
  satisfaction: number;
  monthlyReviews: number;
}

export async function getGoogleReviews(): Promise<ReviewStats> {
  try {
    const response = await client.placeDetails({
      params: {
        place_id: PLACE_ID,
        key: API_KEY as string,
        fields: ['rating', 'user_ratings_total', 'reviews'],
      },
    });

    const place = response.data.result;
    
    // Son 30 günde yapılan yorum sayısını hesapla
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const recentReviews = place.reviews?.filter((review: PlaceReview) => 
      new Date(Number(review.time) * 1000) >= thirtyDaysAgo
    ) || [];

    // Memnuniyet oranını hesapla (4 ve 5 yıldızlı yorumların yüzdesi)
    const highRatings = place.reviews?.filter((review: PlaceReview) => 
      review.rating >= 4
    ).length || 0;
    
    const satisfactionRate = place.reviews 
      ? Math.round((highRatings / place.reviews.length) * 100)
      : 0;

    return {
      rating: place.rating || 0,
      totalReviews: place.user_ratings_total || 0,
      satisfaction: satisfactionRate,
      monthlyReviews: recentReviews.length,
    };
  } catch (error) {
    console.error('Google Reviews verisi alınırken hata:', error);
    throw error;
  }
} 