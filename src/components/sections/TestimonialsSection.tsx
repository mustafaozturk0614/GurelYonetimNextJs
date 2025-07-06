'use client'
import { Quote, Star, Users, ThumbsUp, MessageSquare, Calendar, MapPin } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { useEffect, useState } from 'react'
import { getGoogleReviews, ReviewStats } from '@/lib/google-reviews'

const TestimonialsSection = () => {
  const [stats, setStats] = useState<ReviewStats>({
    rating: 0,
    totalReviews: 0,
    satisfaction: 0,
    monthlyReviews: 0
  })

  useEffect(() => {
    const container = document.getElementById('testimonials')
    if (!container) return

    if (document.querySelector('script[src*="trustindex.io"]')) return

    const script = document.createElement('script')
    script.src = 'https://cdn.trustindex.io/loader.js?1c695ec493734609df46357a137'
    script.async = true
    script.defer = true
    container.appendChild(script)

    // Google Reviews verilerini çek
    const fetchReviews = async () => {
      try {
        const reviewStats = await getGoogleReviews()
        setStats(reviewStats)
      } catch (error) {
        console.error('Reviews yüklenirken hata:', error)
      }
    }

    fetchReviews()
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık Bölümü */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Müşteri Yorumları</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Google üzerinden yapılan gerçek müşteri değerlendirmeleri ve yorumları
          </p>
        </div>

        {/* İstatistikler - Widget Üstünde */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100">
            <div className="flex items-center justify-center mb-3">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900">
                {stats.rating > 0 ? stats.rating.toFixed(1) : '--'}
              </span>
            </div>
            <p className="text-sm text-gray-600">Ortalama Puan</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100">
            <div className="flex items-center justify-center mb-3">
              <MessageSquare className="w-6 h-6 text-blue-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900">
                {stats.totalReviews > 0 ? stats.totalReviews : '--'}
              </span>
            </div>
            <p className="text-sm text-gray-600">Toplam Yorum</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100">
            <div className="flex items-center justify-center mb-3">
              <ThumbsUp className="w-6 h-6 text-green-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900">
                {stats.satisfaction > 0 ? `${stats.satisfaction}%` : '--%'}
              </span>
            </div>
            <p className="text-sm text-gray-600">Memnuniyet</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100">
            <div className="flex items-center justify-center mb-3">
              <Calendar className="w-6 h-6 text-purple-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900">
                {stats.monthlyReviews > 0 ? stats.monthlyReviews : '--'}
              </span>
            </div>
            <p className="text-sm text-gray-600">Bu Ay</p>
          </div>
        </div>

        {/* Google Widget Container */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-12">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                alt="Google" 
                className="w-8 h-8 mr-3"
              />
              <h3 className="text-2xl font-bold text-gray-900">Google Yorumları</h3>
            </div>
            <p className="text-gray-600">Doğrulanmış müşteri deneyimleri</p>
          </div>
          <div id="trustindex-widget-wrapper" className="min-h-[400px]"></div>
        </div>

        {/* Ek Bilgi Kartı */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center border border-blue-100">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-blue-600 mr-2" />
            <h4 className="text-xl font-semibold text-gray-900">Konum Bazlı Yorumlar</h4>
          </div>
          <p className="text-gray-700 mb-4">
            Müşterilerimiz farklı şehirlerden hizmetimizi değerlendiriyor
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-600">
            <span>İstanbul • Ankara • İzmir • Bursa • Antalya</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection