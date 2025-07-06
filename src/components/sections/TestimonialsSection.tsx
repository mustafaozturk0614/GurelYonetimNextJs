'use client'
import { useEffect, useState } from 'react'

const TestimonialsSection = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const container = document.getElementById('testimonials-widget')
    if (!container) return

    if (document.querySelector('script[src*="trustindex.io"]') || isLoading) {
      return
    }

    const script = document.createElement('script')
    script.src = 'https://cdn.trustindex.io/loader.js?1c695ec493734609df46357a137'
    script.async = true
    script.defer = true
    container.appendChild(script)
    setIsLoading(true)
  }, [isLoading])

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Müşteri Yorumları
          </h2>
          <p className="text-lg text-gray-600">
            Müşterilerimizin deneyimlerini dinleyin
          </p>
        </div>
        
        {/* Trustindex Widget Container */}
        <div id="testimonials-widget" className="w-full min-h-[500px]" />
      </div>
    </section>
  )
}

export default TestimonialsSection