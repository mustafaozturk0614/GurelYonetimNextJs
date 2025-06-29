import { useState, useEffect } from 'react'
import { Building2, ArrowRight, Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDeepScrolled, setIsDeepScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      setIsScrolled(scrollPosition > 50)
      setIsDeepScrolled(scrollPosition > windowHeight * 0.5)
      
      const progress = (scrollPosition / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(progress, 100))
      
      const sections = ['home', 'about', 'services', 'portfolio', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`modern-header ${isScrolled ? 'scrolled' : 'transparent'} ${isDeepScrolled ? 'deep-scrolled' : ''}`} id="header">
      <div className="header-backdrop">
        <div className="backdrop-gradient"></div>
        <div className="backdrop-noise"></div>
      </div>
      
      <div className="header-orbs">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>
      
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>
      
      <div className="header-content">
        <div className="logo-section">
          <a href="#home" className="logo-link" onClick={(e) => {
            e.preventDefault()
            scrollToSection('home')
          }}>
            <div className="logo-wrapper">
              <div className="logo-glow"></div>
              <Building2 className="logo-image w-12 h-12 text-blue-600" />
              <div className="logo-text-container">
                <span className="logo-text-main">Gürel Yönetim</span>
                <span className="logo-text-sub">Profesyonel Hizmet</span>
              </div>
            </div>
          </a>
        </div>
        
        <nav className="main-navigation">
          <div className="nav-container">
            {[
              { id: 'home', label: 'Ana Sayfa' },
              { id: 'about', label: 'Hakkımızda' },
              { id: 'services', label: 'Hizmetler' },
              { id: 'portfolio', label: 'Referanslar' },
              { id: 'contact', label: 'İletişim' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
              >
                <span className="nav-text">{item.label}</span>
                <div className="nav-indicator"></div>
              </a>
            ))}
          </div>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="cta-button" onClick={(e) => {
            e.preventDefault()
            scrollToSection('contact')
          }}>
            <div className="cta-shine"></div>
            <div className="cta-content">
              <span className="cta-text">Bize Ulaşın</span>
              <ArrowRight className="cta-icon w-4 h-4" />
            </div>
          </a>
          
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="toggle-lines">
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </div>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {[
          { id: 'home', label: 'Ana Sayfa' },
          { id: 'about', label: 'Hakkımızda' },
          { id: 'services', label: 'Hizmetler' },
          { id: 'portfolio', label: 'Referanslar' },
          { id: 'contact', label: 'İletişim' }
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection(item.id)
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  )
}

export default Header