import { useState, useEffect } from 'react'
import { Star, Clock, User } from 'lucide-react'
import { motion } from 'framer-motion'
// Swiper kütüphanesinden gerekli bileşenleri ve stilleri içe aktar
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Swiper stillerini içe aktar
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface GoogleReview {
  author_name: string
  rating: number
  relative_time_description: string
  text: string
  profile_photo_url?: string
  time: number
}

interface ReviewsData {
  reviews: GoogleReview[]
  average_rating: number
  total_reviews: number
}

const GoogleReviews = () => {
  const [data, setData] = useState<ReviewsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('/api/google-reviews')
        const result = await response.json()

        if (result.status === 'OK') {
          // Profil fotoğraflarını proxy üzerinden çekmek için URL'leri yeniden düzenle
          const processedReviews = (result.result.reviews || []).map((review: GoogleReview) => ({
            ...review,
            profile_photo_url: review.profile_photo_url 
              ? `/api/image-proxy?url=${encodeURIComponent(review.profile_photo_url)}`
              : undefined,
          }));

          setData({
            reviews: processedReviews,
            average_rating: result.result.rating || 0,
            total_reviews: result.result.user_ratings_total || 0,
          })
        } else {
          throw new Error(result.error_message || 'Google yorumları alınamadı')
        }
      } catch (err: unknown) {
        console.error('Yorumları çekerken hata oluştu:', err)
        let errorMessage = 'Yorumlar şu anda yüklenemiyor.';
        if (err instanceof Error) {
          errorMessage = err.message;
        } else if (typeof err === 'string') {
          errorMessage = err;
        }
        setError(errorMessage)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        <p className="ml-4 text-gray-700">Yorumlar yükleniyor...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Hata: {error}</p>
        <p className="text-gray-600">Lütfen daha sonra tekrar deneyin veya API anahtarınızı ve kısıtlamalarınızı kontrol edin.</p>
      </div>
    )
  }

  if (!data || data.reviews.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600">Henüz Google yorumu bulunmamaktadır.</p>
      </div>
    )
  }

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<Star key={i} fill="gold" strokeWidth={0} className="w-5 h-5 text-yellow-500" />)
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-gray-300" />)
      }
    }
    return <div className="flex">{stars}</div>
  }

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Google Yorumları</h2>
        
        {/* Genel Derecelendirme ve Toplam Yorum Sayısı */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center mb-2">
            {renderStars(data.average_rating)}
            <span className="ml-2 text-2xl font-bold text-gray-800">{data.average_rating.toFixed(1)}</span>
          </div>
          <p className="text-gray-600">{data.total_reviews} Toplam Değerlendirme</p>
          <a 
            href={`https://www.google.com/maps/place/?q=place_id:ChIJI-ZL6-mXsBQRnnk44NbOkdk`} // Kendi Place ID'nizi buraya ekleyin
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Tüm Yorumları Gör
          </a>
        </div>

        {/* Yorumlar Karuseli */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {data.reviews.slice(0, 5).map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full mb-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a 
                  href={`https://www.google.com/maps/place/?q=place_id:ChIJI-ZL6-mXsBQRnnk44NbOkdk`} // Kendi Place ID'nizi buraya ekleyin
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full text-current no-underline"
                >
                  <div>
                    <div className="flex items-center mb-4">
                      {review.profile_photo_url ? (
                        <img
                          src={review.profile_photo_url}
                          alt={review.author_name}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full mr-4 bg-gray-200 flex items-center justify-center">
                          <User className="w-6 h-6 text-gray-500" />
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-gray-800">{review.author_name}</p>
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 flex-grow">{review.text}</p>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{review.relative_time_description}</span>
                  </div>
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default GoogleReviews 