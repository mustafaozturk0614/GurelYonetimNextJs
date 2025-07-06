import { Award, Briefcase, Shield, Search, Handshake, Rocket, Users, MessageSquare, Target, GraduationCap, Heart, ShieldCheck, MapPin, CheckCircle, Phone, Mail, ArrowRight, Star, Zap, TrendingUp } from 'lucide-react'
import { regions } from '@/data/company'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Tab içeriği için interface
interface TabContent {
  title: string;
  icon: JSX.Element;
  content: string;
  color: string;
}

const AboutSection = () => {
  const [serviceAreaInput, setServiceAreaInput] = useState('')
  const [serviceAreaResult, setServiceAreaResult] = useState<{ found: boolean; message: string } | null>(null)
  const [activeTab, setActiveTab] = useState('mission')
  const [scrollY, setScrollY] = useState(0)

  // Tab sistemi için yeni state'ler
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const tabContainerRef = useRef<HTMLDivElement>(null)

  // Gesture kontrolü için minimum mesafe
  const minSwipeDistance = 50

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const checkServiceArea = () => {
    const input = serviceAreaInput.toLowerCase().trim()
    const found = regions.some(region => region.toLowerCase().includes(input) || input.includes(region.toLowerCase()))
    
    setServiceAreaResult({
      found,
      message: found 
        ? `Harika! ${input} bölgesinde hizmet veriyoruz. Hemen iletişime geçin!`
        : `Üzgünüz, ${input} bölgesinde henüz hizmet vermiyoruz. Ancak yakın gelecekte genişleme planlarımız var.`
    })
  }

  const principles = [
    {
      icon: <Search className="w-7 h-7" />,
      title: "Şeffaflık",
      description: "Tüm finansal işlemlerde tam şeffaflık, hesap verilebilirlik ve düzenli raporlama ile güven oluşturuyoruz",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Handshake className="w-7 h-7" />,
      title: "Güvenilirlik", 
      description: "Taahhüt ettiğimiz hizmetleri zamanında, eksiksiz ve kaliteli bir şekilde sunarak güven ilişkisi kuruyoruz",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Profesyonellik",
      description: "Sektör deneyimi, uzman kadro ve sürekli eğitimle desteklenen kaliteli hizmet anlayışımız",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "Yenilikçilik",
      description: "Modern teknoloji, dijital çözümler ve sürekli gelişen yönetim yaklaşımlarıyla hizmet sunuyoruz",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    }
  ]

  const workProcessSteps = [
    {
      number: 1,
      title: "Keşif ve Analiz",
      description: "Siteyi ziyaret eder, mevcut durumu analiz eder ve ihtiyaçları belirleriz.",
      icon: <Search className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: 2,
      title: "Teklif ve Sözleşme", 
      description: "İhtiyaçlara özel çözüm paketi ve fiyat teklifi sunar, detaylı sözleşme hazırlarız.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      number: 3,
      title: "Devir İşlemleri",
      description: "Resmi evraklar, hesaplar, anahtar teslimi ve personel devrini gerçekleştiririz.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      number: 4,
      title: "Sistem Kurulumu",
      description: "Dijital yönetim sistemi kurulumu, finansal yapılandırma ve veri girişini tamamlarız.",
      icon: <Award className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      number: 5,
      title: "Aktif Yönetim",
      description: "Profesyonel yönetim, düzenli raporlama ve sürekli iletişim ile hizmet sunarız.",
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500"
    }
  ]

  const cultureValues = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Ekip Çalışması",
      description: "Her çalışanımız değerli bir takım üyesidir. Birlikte çalışarak, birbirimizi destekleyerek ve sürekli bilgi paylaşımıyla en iyi sonuçları elde ederiz. Takım ruhu ve işbirliği kültürümüzle başarıya ulaşıyoruz.",
      color: "from-blue-500 to-cyan-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Açık İletişim",
      description: "Müşterilerimiz, çalışanlarımız ve iş ortaklarımızla her zaman açık, dürüst ve şeffaf iletişim kurarız. İletişimde samimiyet ve güven temel değerlerimizdir.",
      color: "from-emerald-500 to-teal-500",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-50"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Sonuç Odaklılık",
      description: "Karşılaştığımız her soruna çözüm üretir, belirlediğimiz hedeflere ulaşmak için stratejik ve sistematik adımlar atarız. Başarı odaklı yaklaşımımızla fark yaratıyoruz.",
      color: "from-purple-500 to-indigo-500",
      bgPattern: "bg-gradient-to-br from-purple-50 to-indigo-50"
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Sürekli Gelişim",
      description: "Sektördeki yenilikleri takip eder, düzenli eğitimlerle kendimizi sürekli geliştiririz. Her deneyimi öğrenme fırsatı olarak görür, gelişime açık yaklaşımımızla ilerleriz.",
      color: "from-orange-500 to-red-500",
      bgPattern: "bg-gradient-to-br from-orange-50 to-red-50"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Müşteri Memnuniyeti",
      description: "Her kararımızda müşteri memnuniyetini ön planda tutar, beklentileri aşmak için çalışırız. Müşteri odaklı hizmet anlayışımızla uzun vadeli ilişkiler kurarız.",
      color: "from-pink-500 to-rose-500",
      bgPattern: "bg-gradient-to-br from-pink-50 to-rose-50"
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Güvenilirlik",
      description: "Sözlerimizi tutar, sorumluluklarımızı zamanında ve eksiksiz yerine getiririz. Güvenilirlik en temel değerimiz olup, tüm işlerimizde dürüstlük ve tutarlılık gösteririz.",
      color: "from-slate-500 to-gray-500",
      bgPattern: "bg-gradient-to-br from-slate-50 to-gray-50"
    }
  ]

  const stats = [
    { number: "2+", label: "Yıl Deneyim", icon: <Star className="w-6 h-6" /> },
    { number: "25+", label: "Mutlu Müşteri", icon: <Heart className="w-6 h-6" /> },
    { number: "15+", label: "Yönetilen Site", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Destek Hizmeti", icon: <Zap className="w-6 h-6" /> }
  ]

  // Tab sistemi için yeni state'ler
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setActiveTab(activeTab === 'mission' ? 'vision' : 'mission')
    }
    if (isRightSwipe) {
      setActiveTab(activeTab === 'vision' ? 'mission' : 'vision')
    }
  }

  // Tab içerikleri
  const tabContents: Record<string, TabContent> = {
    mission: {
      title: "Misyonumuz",
      icon: <Target className="w-6 h-6" />,
      content: "Profesyonel site yönetimi alanında yenilikçi çözümler sunarak, site sakinlerinin yaşam kalitesini artırmak ve mülk değerlerini korumak için çalışıyoruz.",
      color: "from-blue-600 to-indigo-600"
    },
    vision: {
      title: "Vizyonumuz",
      icon: <Star className="w-6 h-6" />,
      content: "Türkiye'nin önde gelen profesyonel site yönetim şirketi olmak ve sektörde dijital dönüşümün öncüsü olmayı hedefliyoruz.",
      color: "from-purple-600 to-pink-600"
    }
  }

  // Tab sistemi render kodu
  const renderTabs = () => (
    <div 
      ref={tabContainerRef}
      className="w-full max-w-2xl mx-auto mb-12"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Tab Butonları */}
      <div className="flex gap-4 mb-8 p-2 bg-white/50 backdrop-blur-sm rounded-full shadow-lg">
        {Object.entries(tabContents).map(([key, { title, icon }]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === key
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                : 'text-slate-600 hover:bg-white/50'
            }`}
          >
            {icon}
            {title}
          </button>
        ))}
      </div>

      {/* Tab İçeriği */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
        >
          <div className="flex items-start gap-4">
            <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${tabContents[activeTab].color} flex items-center justify-center text-white shadow-lg`}>
              {tabContents[activeTab].icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                {tabContents[activeTab].title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {tabContents[activeTab].content}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )

  return (
    <section id="about" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 py-20">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500/30 rotate-45 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500/30 rounded-full animate-bounce" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-emerald-500/30 rotate-45 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-orange-500/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elite Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Award className="w-4 h-4" />
            HAKKIMIZDA
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Gürel{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Yönetim
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-20"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-20"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            2022'den beri Balıkesir genelinde profesyonel apartman, site ve mülk yönetimi hizmetleri sunarak, 
            mülk sahiplerinin ve site sakinlerinin yaşam kalitesini artırıyoruz.
          </p>

      
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Company Introduction */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-6">
                  2022'DEN BERİ HİZMETİNİZDEYİZ
                </div>

                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  <strong className="text-slate-900">Gürel Yönetim</strong>, 2022 yılından itibaren Balıkesir genelinde{' '}
                  <strong className="text-blue-600">profesyonel apartman, site ve mülk yönetimi</strong>{' '}
                  alanında uzmanlaşmış, güvenilir ve deneyimli bir yönetim firmasıdır. Modern yönetim anlayışı ve teknoloji odaklı 
                  çözümlerimizle mülk sahiplerinin ve site sakinlerinin yaşam kalitesini artırmayı hedefliyoruz.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  <strong>Gürel Yönetim olarak</strong>, toplu yaşam alanlarında{' '}
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-md mx-1 text-sm">aidat yönetimi</span>,{' '}
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md mx-1 text-sm">bütçe planlaması</span>,{' '}
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded-md mx-1 text-sm">bakım ve onarım süreçleri</span>,{' '}
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 rounded-md mx-1 text-sm">güvenlik hizmetleri</span>,{' '}
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-pink-100 text-pink-700 rounded-md mx-1 text-sm">temizlik organizasyonu</span>{' '}
                  ve <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md mx-1 text-sm">mali müşavirlik desteği</span>{' '}
                  gibi kapsamlı hizmetleri şeffaf ve profesyonel bir yaklaşımla sunuyoruz.
                </p>
              </div>
            </div>

            {/* Mission & Vision Tabs */}
            {renderTabs()}

            {/* Principles Grid */}
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                Neden Gürel Yönetim?
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {principles.map((principle, index) => (
                  <div key={index} className="group relative">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${principle.color} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    <div className={`relative ${principle.bgColor} rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                      <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${principle.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {principle.icon}
                      </div>
                      <h5 className="text-lg font-bold text-slate-900 mb-2">{principle.title}</h5>
                      <p className="text-slate-600 text-sm leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="space-y-8">
            {/* Company Images */}
            <div className="space-y-6">
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Gürel Yönetim Ofis"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <p className="text-white font-semibold text-lg">
                        "Mülkünüzü değer katan profesyonel çözümlerle yönetiyoruz."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Gürel Yönetim Ekip"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <p className="text-white font-semibold text-lg">
                        "Güvenilir ve şeffaf yönetim anlayışımızla yanınızdayız."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Regions */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Hizmet Bölgelerimiz</h4>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {regions.map((region, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-500" />
                          <span className="font-semibold text-slate-800 text-sm">{region}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Service Area Checker */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200/50">
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-900 mb-4">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    Hizmet Bölgenizde miyiz?
                  </h4>
                  <div className="flex gap-3 mb-4">
                    <input 
                      type="text" 
                      placeholder="İlçe veya semt adını yazın"
                      value={serviceAreaInput}
                      onChange={(e) => setServiceAreaInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && checkServiceArea()}
                      className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                    <button 
                      onClick={checkServiceArea}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Kontrol Et
                    </button>
                  </div>
                  {serviceAreaResult && (
                    <div className={`p-4 rounded-xl ${serviceAreaResult.found ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'}`}>
                      <p className={`${serviceAreaResult.found ? 'text-emerald-800' : 'text-red-800'} font-medium`}>
                        {serviceAreaResult.message}
                      </p>
                      {serviceAreaResult.found && (
                        <div className="flex gap-3 mt-3">
                          <a href="tel:05305556007" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                            <Phone className="w-4 h-4" />
                            Ara
                          </a>
                          <a href="mailto:gurelyonetim@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-300">
                            <Mail className="w-4 h-4" />
                            Mail
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work Process Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Çalışma Süreçlerimiz
            </h4>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Gürel Yönetim olarak, bir siteyi devralmaktan profesyonel yönetim sürecine kadar her adımı titizlikle planlıyoruz
            </p>
          </div>

          <div className="relative">
            {/* Process Flow */}
            <div className="grid md:grid-cols-5 gap-8">
              {workProcessSteps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Connector Line */}
                  {index < workProcessSteps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 z-0"></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className={`absolute -inset-2 bg-gradient-to-r ${step.color} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      {/* Step Number */}
                      <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                        {step.number}
                      </div>
                      
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl text-white mb-4 mt-4 group-hover:scale-110 transition-transform duration-300`}>
                        {step.icon}
                      </div>
                      
                      {/* Content */}
                      <h5 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h5>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Culture Section */}
        <div>
          <div className="text-center mb-16">
            <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Çalışma Kültürümüz
            </h4>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Gürel Yönetim ekibi olarak değerlerimiz ve prensipleriyle fark yaratıyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultureValues.map((value, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-2 bg-gradient-to-r ${value.color} rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className={`relative ${value.bgPattern} rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  
                  {/* Content */}
                  <h5 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-700 group-hover:bg-clip-text transition-all duration-300">
                    {value.title}
                  </h5>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  
                  {/* Decorative Element */}
                  <div className={`absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-r ${value.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection