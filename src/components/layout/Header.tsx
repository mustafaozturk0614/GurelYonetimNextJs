import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { 
      href: '/', 
      label: 'Ana Sayfa',
      description: 'Gürel Yönetim Ana Sayfası'
    },
    { 
      href: '/about', 
      label: 'Hakkımızda',
      description: 'Şirket Bilgileri & Ekibimiz'
    },
    { 
      href: '/services', 
      label: 'Hizmetlerimiz',
      description: 'Site & Apartman Yönetimi'
    },
    { 
      href: '/portfolio', 
      label: 'Referanslarımız',
      description: 'Başarılı Projelerimiz'
    },
    { 
      href: '/contact', 
      label: 'İletişim',
      description: 'Bize Ulaşın & Teklif Alın'
    }
  ]

  const isActivePage = (href: string) => {
    if (href === '/') {
      return router.pathname === '/'
    }
    return router.pathname.startsWith(href)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 xl:h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 group max-w-[50%] sm:max-w-[60%] md:max-w-none">
            <div className="relative flex-shrink-0">
              <img 
                src="/assets/svg/logo-sy-svg.svg" 
                alt="Gürel Yönetim Logo" 
                className="h-24 sm:h-28  xl:h-32 w-auto  transition-transform duration-300 group-hover:scale-105"
              />
      </div>
            <div className="min-w-0 flex-1 flex flex-row lg:flex-col items-center lg:items-start gap-2">
              <h1 className={`text-xl font-bold transition-colors duration-300 leading-tight ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}>
                Gürel Yönetim
              </h1>
              <p className={`text-xs sm:text-xs md:text-sm transition-colors duration-300 leading-tight border-l lg:border-l-0 border-current pl-2 lg:pl-0 opacity-70 ${
                isScrolled ? 'text-slate-600' : 'text-slate-200'
              }`}>
                Profesyonel Site Yönetimi
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group overflow-hidden ${
                  isActivePage(item.href)
                    ? isScrolled
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl shadow-blue-600/30 scale-105'
                      : 'bg-gradient-to-r from-white/25 to-white/15 text-white backdrop-blur-md border border-white/40 shadow-lg shadow-white/10'
                    : isScrolled
                      ? 'text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:shadow-md hover:scale-105'
                      : 'text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-white/15 hover:to-white/5 hover:backdrop-blur-md hover:scale-105'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: isActivePage(item.href) ? 'translateY(-1px)' : 'translateY(0)'
                }}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                  isActivePage(item.href)
                    ? isScrolled
                      ? 'bg-gradient-to-r from-blue-500/80 to-blue-600/80 blur-sm'
                      : 'bg-gradient-to-r from-white/20 to-white/10 blur-sm'
                    : 'opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/20 to-blue-600/20 blur-sm'
                }`} />
                
                {/* Content */}
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{item.label}</span>
                  {isActivePage(item.href) && (
                    <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                      isScrolled ? 'bg-white' : 'bg-white/80'
                    }`} />
                  )}
                </span>

                {/* Active indicator line */}
                {isActivePage(item.href) && (
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? 'bg-white' : 'bg-white/80'
                  }`} />
                )}
                
                {/* Hover tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-4 py-2 bg-slate-900/95 backdrop-blur-md text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-slate-700/50 shadow-xl">
                  <div className="flex flex-col items-center">
                    <span className="font-medium">{item.description}</span>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900/95 rotate-45 border-l border-t border-slate-700/50"></div>
                  </div>
                </div>
              </Link>
            ))}
        </nav>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 max-w-[35%] sm:max-w-none">
            {/* Contact Info (Hidden on small screens) */}
            <div className="hidden xl:flex items-center space-x-3">
              <a 
                href="tel:+905551234567" 
                className={`group flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                  isScrolled 
                    ? 'text-slate-600 hover:text-blue-600 border border-transparent hover:border-blue-200/50' 
                    : 'text-white/90 hover:text-white border border-transparent hover:border-white/30'
                }`}
              >
                {/* Hover background effect */}
                <div className={`absolute inset-0 w-full h-full transition-all duration-500 opacity-0 group-hover:opacity-100 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 blur-sm'
                    : 'bg-gradient-to-r from-white/10 to-white/5 blur-sm'
                }`} />
                
                <div className="relative z-10 flex items-center space-x-2">
                  <div className="relative">
                    <Phone className="w-4 h-4 transition-all duration-300 group-hover:rotate-12" />
                    <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping ${
                      isScrolled ? 'bg-blue-400' : 'bg-white'
                    }`} />
                  </div>
                  <span className="text-sm font-semibold tracking-wide">0555 123 45 67</span>
                </div>
              </a>
              
              <div className={`w-px h-6 transform transition-transform duration-300 group-hover:scale-y-125 ${isScrolled ? 'bg-slate-300' : 'bg-white/30'}`}></div>
              
              <a 
                href="mailto:info@gurelyonetim.com" 
                className={`group flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                  isScrolled 
                    ? 'text-slate-600 hover:text-blue-600 border border-transparent hover:border-blue-200/50' 
                    : 'text-white/90 hover:text-white border border-transparent hover:border-white/30'
                }`}
              >
                {/* Hover background effect */}
                <div className={`absolute inset-0 w-full h-full transition-all duration-500 opacity-0 group-hover:opacity-100 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 blur-sm'
                    : 'bg-gradient-to-r from-white/10 to-white/5 blur-sm'
                }`} />
                
                <div className="relative z-10 flex items-center space-x-2">
                  <div className="relative">
                    <Mail className="w-4 h-4 transition-all duration-300 group-hover:rotate-12" />
                    <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping ${
                      isScrolled ? 'bg-blue-400' : 'bg-white'
                    }`} />
                  </div>
                  <span className="text-sm font-semibold tracking-wide">info@gurelyonetim.com</span>
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden relative p-3 rounded-xl transition-all duration-300 hover:scale-110 group ${
                isScrolled 
                  ? 'text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:shadow-md border border-transparent hover:border-blue-200/50' 
                  : 'text-white hover:text-white hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 hover:backdrop-blur-md border border-transparent hover:border-white/30'
              } ${isMenuOpen ? 'scale-110' : ''}`}
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="w-6 h-6 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </div>
              
              {/* Animated background */}
              <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                isMenuOpen 
                  ? isScrolled
                    ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20'
                    : 'bg-gradient-to-r from-white/20 to-white/10'
                  : 'opacity-0'
              }`} />
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out ${
        isMenuOpen 
          ? 'max-h-screen opacity-100 translate-y-0' 
          : 'max-h-0 opacity-0 overflow-hidden -translate-y-4'
      }`}>
        <div className="bg-white/97 backdrop-blur-xl border-t border-slate-200/60 shadow-2xl">
          <nav className="container mx-auto px-4 py-6">
            <div className="space-y-3">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group block px-5 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                    isActivePage(item.href)
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl shadow-blue-600/30 border border-blue-500/20'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:shadow-lg border border-transparent hover:border-blue-200/50'
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: isActivePage(item.href) ? 'translateX(4px)' : 'translateX(0)'
                  }}
                >
                  {/* Background glow */}
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                    isActivePage(item.href)
                      ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 blur-sm'
                      : 'opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 to-blue-600/10 blur-sm'
                  }`} />
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <span>{item.label}</span>
                        {isActivePage(item.href) && (
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        )}
                      </div>
                      <span className={`text-sm mt-1 ${
                        isActivePage(item.href) ? 'text-blue-100' : 'text-slate-500 group-hover:text-blue-500'
                      }`}>
                        {item.description}
                      </span>
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActivePage(item.href)
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Active indicator */}
                  {isActivePage(item.href) && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
                  )}
                </Link>
              ))}
            </div>
            
            {/* Mobile Contact Info */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="space-y-3">
                <a 
                  href="tel:+905551234567" 
                  className="group flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="relative">
                    <Phone className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-400 animate-ping opacity-0 group-hover:opacity-100" />
                  </div>
                  <div>
                    <span className="block font-medium tracking-wide group-hover:text-blue-700">Telefon</span>
                    <span className="text-sm text-slate-500 group-hover:text-blue-600/80">0555 123 45 67</span>
                  </div>
                  
                  {/* Hover background effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </a>
                
                <a 
                  href="mailto:info@gurelyonetim.com" 
                  className="group flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="relative">
                    <Mail className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-400 animate-ping opacity-0 group-hover:opacity-100" />
                  </div>
                  <div>
                    <span className="block font-medium tracking-wide group-hover:text-blue-700">E-posta</span>
                    <span className="text-sm text-slate-500 group-hover:text-blue-600/80">info@gurelyonetim.com</span>
                  </div>
                  
                  {/* Hover background effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header