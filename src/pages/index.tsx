import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import TeamSection from '@/components/sections/TeamSection'

// Dynamic imports for better performance
const Header = dynamic(() => import('@/components/layout/Header').then(mod => mod.default), {
  ssr: true,
})

const HeroSection = dynamic(() => import('@/components/sections/HeroSection').then(mod => mod.default), {
  ssr: true,
})

const AboutSection = dynamic(() => import('@/components/sections/AboutSection').then(mod => mod.default), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
})

const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection').then(mod => mod.default), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
})

const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection').then(mod => mod.default), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
})

const GoogleReviews = dynamic(() => import('@/components/ui/GoogleReviews').then(mod => mod.default), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
})

const ContactSection = dynamic(() => import('@/components/sections/ContactSection').then(mod => mod.default), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />,
})

const Footer = dynamic(() => import('@/components/layout/Footer').then(mod => mod.default), {
  loading: () => <div className="h-48 bg-gray-800 animate-pulse" />,
})

const FloatingButtons = dynamic(() => import('@/components/ui/FloatingButtons').then(mod => mod.default), {
  ssr: false,
})

const LoadingSpinner = dynamic(() => import('@/components/ui/LoadingSpinner').then(mod => mod.default), {
  ssr: false,
})

const InstagramSection = dynamic(() => import('@/components/sections/InstagramSection').then(mod => mod.default), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
})

const HomePage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <>
      <NextSeo
        title="Gürel Yönetim - Profesyonel Site ve Apartman Yönetimi | Edremit, Balıkesir"
        description="Balıkesir Edremit bölgesinde 15+ yıl deneyimle profesyonel site ve apartman yönetimi hizmetleri. Modern teknoloji, şeffaf yönetim, 7/24 destek. Hemen arayın!"
        canonical="https://gurelyonetim.com"
        openGraph={{
          type: 'website',
          locale: 'tr_TR',
          url: 'https://gurelyonetim.com',
          siteName: 'Gürel Yönetim',
          title: 'Gürel Yönetim - Profesyonel Site ve Apartman Yönetimi',
          description: 'Balıkesir Edremit bölgesinde 15+ yıl deneyimle profesyonel site ve apartman yönetimi hizmetleri.',
          images: [
            {
              url: 'https://gurelyonetim.com/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Gürel Yönetim - Profesyonel Site Yönetimi',
            },
          ],
        }}
        twitter={{
          handle: '@gurelyonetim',
          site: '@gurelyonetim',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'site yönetimi, apartman yönetimi, edremit, balıkesir, profesyonel yönetim, aidat takibi, temizlik hizmetleri, teknik hizmetler, güvenlik hizmetleri, anıl gürel',
          },
          {
            name: 'author',
            content: 'Gürel Yönetim',
          },
          {
            name: 'robots',
            content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
          {
            name: 'googlebot',
            content: 'index, follow',
          },
          {
            name: 'geo.region',
            content: 'TR-10',
          },
          {
            name: 'geo.placename',
            content: 'Edremit, Balıkesir',
          },
          {
            name: 'geo.position',
            content: '39.5926;26.9344',
          },
          {
            name: 'ICBM',
            content: '39.5926, 26.9344',
          },
        ]}
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TeamSection />
          <InstagramSection />
          <TestimonialsSection />
          <GoogleReviews />
          <ContactSection />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  )
}

export default HomePage