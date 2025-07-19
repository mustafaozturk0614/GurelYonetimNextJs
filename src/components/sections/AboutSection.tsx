import { Award, Briefcase, Shield, Search, Handshake, Rocket, Users, MessageSquare, Target, GraduationCap, Heart, ShieldCheck, MapPin, Phone, Mail, Star, Zap, ChevronRight, TrendingUp, Calendar, Clock } from 'lucide-react'
import { regions } from '@/data/company'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Tab içeriği için interface
interface TabContent {
  title: string;
  icon: JSX.Element;
  content: string;
  color: string;
  stats?: { label: string; value: string }[];
}

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('mission')
  const [isVisible, setIsVisible] = useState(false)

  // Tab sistemi için yeni state'ler
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const tabContainerRef = useRef<HTMLDivElement>(null)

  // Gesture kontrolü için minimum mesafe
  const minSwipeDistance = 50

  // Sayfa yüklendiğinde animasyon tetikleme
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const principles = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Şeffaflık",
      description: "Tüm finansal işlemlerde tam şeffaflık, hesap verilebilirlik ve düzenli raporlama ile güven oluşturuyoruz.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      stats: "100% Açık Muhasebe"
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Güvenilirlik", 
      description: "Taahhüt ettiğimiz hizmetleri zamanında, eksiksiz ve kaliteli bir şekilde sunarak güven ilişkisi kuruyoruz.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      stats: "7/24 Destek"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Profesyonellik",
      description: "Sektör deneyimi, uzman kadro ve sürekli eğitimle desteklenen kaliteli hizmet anlayışımız.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      stats: "3+ Yıl Deneyim"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Yenilikçilik",
      description: "Modern teknoloji, dijital çözümler ve sürekli gelişen yönetim yaklaşımlarıyla hizmet sunuyoruz.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      stats: "Dijital Çözümler"
    }
  ]

  const workProcessSteps = [
    {
      number: 1,
      title: "Keşif ve Analiz",
      description: "Siteyi ziyaret eder, mevcut durumu analiz eder ve ihtiyaçları belirleriz.",
      icon: <Search className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      time: "1-2 Gün"
    },
    {
      number: 2,
      title: "Teklif ve Sözleşme", 
      description: "İhtiyaçlara özel çözüm paketi ve fiyat teklifi sunar, detaylı sözleşme hazırlarız.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
      time: "2-3 Gün"
    },
    {
      number: 3,
      title: "Devir İşlemleri",
      description: "Resmi evraklar, hesaplar, anahtar teslimi ve personel devrini gerçekleştiririz.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
      time: "1 Hafta"
    },
    {
      number: 4,
      title: "Sistem Kurulumu",
      description: "Dijital yönetim sistemi kurulumu, finansal yapılandırma ve veri girişini tamamlarız.",
      icon: <Award className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      time: "3-5 Gün"
    },
    {
      number: 5,
      title: "Aktif Yönetim",
      description: "Profesyonel yönetim, düzenli raporlama ve sürekli iletişim ile hizmet sunarız.",
      icon: <Target className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      time: "Sürekli"
    }
  ]

  const cultureValues = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Ekip Çalışması",
      description: "Her çalışanımız değerli bir takım üyesidir. Birlikte çalışarak, birbirimizi destekleyerek ve sürekli bilgi paylaşımıyla en iyi sonuçları elde ederiz.",
      color: "from-blue-500 to-cyan-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Açık İletişim",
      description: "Müşterilerimiz, çalışanlarımız ve iş ortaklarımızla her zaman açık, dürüst ve şeffaf iletişim kurarız.",
      color: "from-emerald-500 to-teal-500",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-50"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Sonuç Odaklılık",
      description: "Karşılaştığımız her soruna çözüm üretir, belirlediğimiz hedeflere ulaşmak için stratejik ve sistematik adımlar atarız.",
      color: "from-purple-500 to-indigo-500",
      bgPattern: "bg-gradient-to-br from-purple-50 to-indigo-50"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Sürekli Gelişim",
      description: "Sektördeki yenilikleri takip eder, düzenli eğitimlerle kendimizi sürekli geliştiririz.",
      color: "from-orange-500 to-red-500",
      bgPattern: "bg-gradient-to-br from-orange-50 to-red-50"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Müşteri Memnuniyeti",
      description: "Her kararımızda müşteri memnuniyetini ön planda tutar, beklentileri aşmak için çalışırız.",
      color: "from-pink-500 to-rose-500",
      bgPattern: "bg-gradient-to-br from-pink-50 to-rose-50"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Güvenilirlik",
      description: "Sözlerimizi tutar, sorumluluklarımızı zamanında ve eksiksiz yerine getiririz.",
      color: "from-slate-500 to-gray-500",
      bgPattern: "bg-gradient-to-br from-slate-50 to-gray-50"
    }
  ]

  // Tab sistemi için touch event'ler
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

  // Tab içerikleri - İyileştirilmiş
  const tabContents: Record<string, TabContent> = {
    mission: {
      title: "Misyonumuz",
      icon: <Target className="w-5 h-5" />,
      content: "Profesyonel site yönetimi alanında yenilikçi çözümler sunarak, site sakinlerinin yaşam kalitesini artırmak ve mülk değerlerini korumak için çalışıyoruz.",
      color: "from-blue-600 to-indigo-600",
      stats: [
        { label: "Aktif Site", value: "50+" },
        { label: "Memnun Müşteri", value: "500+" }
      ]
    },
    vision: {
      title: "Vizyonumuz",
      icon: <Star className="w-5 h-5" />,
      content: "Türkiye'nin önde gelen profesyonel site yönetim şirketi olmak ve sektörde dijital dönüşümün öncüsü olmayı hedefliyoruz.",
      color: "from-purple-600 to-pink-600",
      stats: [
        { label: "Hedef Büyüme", value: "%200" },
        { label: "Yeni Teknoloji", value: "AI & IoT" }
      ]
    }
  }

  // Tab sistemi render kodu - İyileştirilmiş
  const renderTabs = () => (
    <div 
      ref={tabContainerRef}
      className="w-full max-w-4xl mx-auto mb-12"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Tab Butonları - Modern tasarım */}
      <div className="flex gap-2 mb-8 p-1 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
        {Object.entries(tabContents).map(([key, { title, icon }]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-semibold transition-all duration-500 ${
              activeTab === key
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-[1.02] shadow-blue-500/25'
                : 'text-slate-600 hover:bg-white/50 hover:text-slate-800'
            }`}
          >
            <span className={`transition-transform duration-300 ${activeTab === key ? 'scale-110' : ''}`}>
            {icon}
            </span>
            {title}
          </button>
        ))}
      </div>

      {/* Tab İçeriği - Gelişmiş tasarım */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20"
        >
          <div className="flex flex-col lg:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tabContents[activeTab].color} flex items-center justify-center text-white shadow-lg`}>
              {tabContents[activeTab].icon}
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                {tabContents[activeTab].title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {tabContents[activeTab].content}
              </p>
              
              {/* İstatistikler */}
              {tabContents[activeTab].stats && (
                <div className="flex flex-wrap gap-4">
                  {tabContents[activeTab].stats!.map((stat, index) => (
                    <div key={index} className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )

  return (
    <section id="about" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 py-20">
      {/* Gelişmiş Arka Plan Efektleri */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/15 to-teal-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Floating Geometric Shapes - Daha zarif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-500/20 rotate-45 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-purple-500/20 rounded-full animate-bounce" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-emerald-500/20 rotate-45 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-40 w-3 h-3 bg-orange-500/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Header Section */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Award className="w-4 h-4" />
            HAKKIMIZDA
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            Gürel Yönetim ile <br className="md:hidden" /> 
            <span className="text-slate-900">Profesyonel Çözümler</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-blue-600">Temmuz 2022</span>&apos;den bu yana Balıkesir&apos;in <span className="font-semibold text-purple-600">9 farklı bölgesinde</span> profesyonel site yönetimi hizmetleri sunuyoruz.
          </p>
          
          {/* Hızlı İstatistikler */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-slate-600">Aktif Site</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-sm text-slate-600">Memnun Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">3+</div>
              <div className="text-sm text-slate-600">Yıl Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">9</div>
              <div className="text-sm text-slate-600">Hizmet Bölgesi</div>
            </div>
        </div>
        </motion.div>

        {/* Ana İçerik Grid - Daha kompakt */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
          {/* Sol Kolon - İçerik */}
          <div className="space-y-10">
            {/* Şirket Tanıtımı - Modernize edilmiş */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl blur-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
              <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-6">
                  <Calendar className="w-4 h-4" />
                  2022'DEN BERİ HİZMETİNİZDEYİZ
                </div>

                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  <strong className="text-slate-900">Gürel Yönetim</strong>, 2022 yılından itibaren Balıkesir genelinde{' '}
                  <strong className="text-blue-600">profesyonel apartman, site ve mülk yönetimi</strong>{' '}
                  alanında uzmanlaşmış, güvenilir ve deneyimli bir yönetim firmasıdır.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { label: "Aidat Yönetimi", color: "bg-blue-100 text-blue-700" },
                    { label: "Bütçe Planlaması", color: "bg-emerald-100 text-emerald-700" },
                    { label: "Bakım & Onarım", color: "bg-purple-100 text-purple-700" },
                    { label: "Güvenlik Hizmetleri", color: "bg-orange-100 text-orange-700" },
                    { label: "Temizlik Organizasyonu", color: "bg-pink-100 text-pink-700" },
                    { label: "Mali Müşavirlik", color: "bg-indigo-100 text-indigo-700" }
                  ].map((service, index) => (
                    <span key={index} className={`inline-flex items-center gap-1 px-3 py-1 ${service.color} rounded-full text-sm font-medium`}>
                      {service.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mission & Vision Tabs */}
            {renderTabs()}

            {/* Principles Grid - Kompakt tasarım */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                Neden Gürel Yönetim?
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${principle.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    <div className={`relative ${principle.bgColor} rounded-2xl p-6 border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${principle.color} rounded-xl text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {principle.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-lg font-bold text-slate-900 mb-2">{principle.title}</h5>
                          <p className="text-slate-600 text-sm leading-relaxed mb-3">{principle.description}</p>
                          <div className="text-xs font-semibold text-slate-500">{principle.stats}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sağ Kolon - Görseller */}
              <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Şirket Görselleri - Yeniden düzenlenmiş */}
            <div className="grid gap-6">
              {/* Ana resim */}
              <div className="group relative cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2">
                  <Image 
                    src="/assets/newimg/gmy1.png"
                    alt="Gürel Yönetim Ekibi"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="text-center text-white">
                        <h4 className="text-xl font-bold mb-2">Profesyonel Ekibimiz</h4>
                        <p className="text-sm opacity-90">Gürel Yönetim ekibimizle hizmet kalitesinde fark yaratıyoruz</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alt resimler */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group relative cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-1">
                  <Image 
                    src="/assets/newimg/gy1.png"
                      alt="Müşteri Odaklı Hizmet"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm font-medium">Müşteri Odaklı Yaklaşım</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-1">
                  <Image 
                      src="/assets/newimg/gmy2.png"
                      alt="Modern Ofis Ortamı"
                    width={400}
                      height={300}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm font-medium">Modern Teknoloji</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hizmet Bölgeleri - Kompakt tasarım */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                  <h4 className="text-xl font-bold text-slate-900">Hizmet Bölgelerimiz</h4>
                    <p className="text-sm text-slate-600">Balıkesir genelinde 9 farklı bölge</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {regions.map((region, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group relative"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-blue-500" />
                          <span className="font-medium text-slate-900 text-sm">{region}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Çalışma Süreçleri - Daha modern */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Çalışma Süreçlerimiz
            </h4>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Gürel Yönetim olarak, bir siteyi devralmaktan profesyonel yönetim sürecine kadar her adımı titizlikle planlıyoruz
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-5 gap-6 lg:gap-8">
              {workProcessSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Bağlantı Çizgisi */}
                  {index < workProcessSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-6 lg:w-8 h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 z-0"></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className={`absolute -inset-2 bg-gradient-to-r ${step.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      {/* Adım Numarası */}
                      <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                        {step.number}
                      </div>
                      
                      {/* İkon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl text-white mb-4 mt-2 group-hover:scale-110 transition-transform duration-300`}>
                        {step.icon}
                      </div>
                      
                      {/* İçerik */}
                      <h5 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h5>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">{step.description}</p>
                      
                      {/* Süre */}
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="w-3 h-3" />
                        {step.time}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Kültür Bölümü - Daha kompakt */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Çalışma Kültürümüz
            </h4>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Gürel Yönetim ekibi olarak değerlerimiz ve prensipleriyle fark yaratıyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute -inset-2 bg-gradient-to-r ${value.color} rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className={`relative ${value.bgPattern} rounded-3xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                  {/* İkon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  
                  {/* İçerik */}
                  <h5 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h5>
                  <p className="text-slate-600 leading-relaxed text-sm">{value.description}</p>
                  
                  {/* Dekoratif Element */}
                  <div className={`absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r ${value.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection