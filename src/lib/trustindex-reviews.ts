export interface ReviewStats {
  rating: number;
  totalReviews: number;
  satisfaction: number;
  monthlyReviews: number;
}

export async function getTrustindexReviews(): Promise<ReviewStats> {
  try {
    const response = await fetch(
      'https://api.trustindex.io/api/4/reviews',
      {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TRUSTINDEX_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('API yanıt vermedi');
    }

    const data = await response.json();

    // Trustindex API'den gelen verileri işle
    return {
      rating: data.average_rating || 0,
      totalReviews: data.total_reviews || 0,
      satisfaction: data.satisfaction_rate || 0,
      monthlyReviews: data.monthly_reviews || 0,
    };
  } catch (error) {
    console.error('Trustindex verisi alınırken hata:', error);
    throw error;
  }
} 