import { useState } from 'react'
import { ArrowRight, Phone, Building, Home, MessageCircle, Twitter, Linkedin, Shield, TrendingUp, Users } from 'lucide-react'
import { companyStats } from '@/data/company'
import { services } from '@/data/services'
import ServiceModal from '@/components/ui/ServiceModal'
import { Service } from '@/types'


const HeroSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleServiceClick = (service: any) => {
    const fullService = services.find(s => s.title.includes(service.title.split(' ')[0]))
    if (fullService) {
      setSelectedService(fullService)
      setIsServiceModalOpen(true)
    }
  }

  const phoneNumber = "905305556007"
  const message = "Merhaba, Gürel Yönetim hizmetleri hakkında bilgi almak istiyorum."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  //<source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
  //<source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
  return (
    <>
      <section className="split-hero" id="home">
        {/* Sol Bölüm - Apartman ve Site Yönetimi */}
        <div className="split-section">
          <video className="video-background" autoPlay muted loop playsInline>
            <source src="../../../assets/videos/20250405_1349_Sunrise Modern Complex_storyboard_01jr2s3hqwep79q17t9mpghbxw.mp4" type="video/mp4" />
            <source src="assets/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="split-content">
            <div className="content-wrapper">
              <div className="title-area">
                <span className="service-tag">
                  <Building className="w-4 h-4" />
                  Profesyonel Hizmet
                </span>
                <h2 className="split-title">Site & Apartman Yönetimi</h2>
                <div className="title-accent"></div>
              </div>
              
              <div className="service-highlights">
                <div className="highlight-item">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>Modern Yönetim</span>
                </div>
                <div className="highlight-item">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span>Şeffaf Raporlama</span>
                </div>
                <div className="highlight-item">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span>7/24 Destek</span>
                </div>
              </div>

              <p className="split-description">
                Edremit bölgesinde modern teknoloji ve deneyimli ekibimizle profesyonel site yönetimi hizmetleri sunuyoruz.
              </p>

              <div className="cta-container">
                <button 
                  className="split-cta primary"
                  onClick={() => scrollToSection('services')}
                >
                  <span>Hizmetleri Keşfet</span>
                  <ArrowRight className="cta-arrow w-4 h-4" />
                </button>
                <a 
                  href="#contact" 
                  className="text-link"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('contact')
                  }}
                >
                  İletişime Geç →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Bölüm - Mülk Yönetimi */}
        <div className="split-section">
          <video className="video-background" autoPlay muted loop playsInline>
            <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          <div className="split-content">
            <div className="content-wrapper">
              <div className="title-area">
                <span className="service-tag">
                  <Home className="w-4 h-4" />
                  Güvenilir Çözüm
                </span>
                <h2 className="split-title">Mülk Yönetimi</h2>
                <div className="title-accent"></div>
              </div>

              <div className="service-highlights">
                <div className="highlight-item">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Değer Artışı</span>
                </div>
                <div className="highlight-item">
                  <Building className="w-4 h-4 text-blue-400" />
                  <span>Kiralama Hizmeti</span>
                </div>
                <div className="highlight-item">
                  <Shield className="w-4 h-4 text-orange-400" />
                  <span>Güvenli Yatırım</span>
                </div>
              </div>

              <p className="split-description">
                Mülklerinizin değerini artırarak yatırımlarınızı güvence altına alıyoruz. Kapsamlı hizmetlerle yanınızdayız.
              </p>

              <div className="cta-container">
                <button 
                  className="split-cta secondary"
                  onClick={() => scrollToSection('about')}
                >
                  <span>Detaylı Bilgi</span>
                  <ArrowRight className="cta-arrow w-4 h-4" />
                </button>
                <a 
                  href="#portfolio" 
                  className="text-link"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('portfolio')
                  }}
                >
                  Referanslar →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Paylaşım Butonları */}
        <div className="share-buttons">
          <a 
            href="https://twitter.com/share?url=https://gurelyonetim.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="share-button twitter"
            aria-label="Twitter'da paylaş"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a 
            href="https://www.linkedin.com/shareArticle?url=https://gurelyonetim.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="share-button linkedin"
            aria-label="LinkedIn'de paylaş"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="share-button whatsapp"
            aria-label="WhatsApp'ta paylaş"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div> 
      </section>

      <ServiceModal 
        service={selectedService}
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
      />
    </>
  )
}

export default HeroSection