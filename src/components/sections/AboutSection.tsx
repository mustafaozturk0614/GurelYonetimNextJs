import { Award, Briefcase, Shield, Search, Handshake, Rocket, Users, MessageSquare, Target, GraduationCap, Heart, ShieldCheck, MapPin, CheckCircle, Phone, Mail, ArrowRight, Star, Zap, TrendingUp } from 'lucide-react'
import { regions } from '@/data/company'
import { useState, useEffect } from 'react'

const AboutSection = () => {
  const [serviceAreaInput, setServiceAreaInput] = useState('')
  const [serviceAreaResult, setServiceAreaResult] = useState<{ found: boolean; message: string } | null>(null)
  const [activeTab, setActiveTab] = useState('mission')
  const [scrollY, setScrollY] = useState(0)

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
      description: "Tüm finansal işlemlerde tam şeffaflık ve hesap verilebilirlik",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Handshake className="w-7 h-7" />,
      title: "Güvenilirlik", 
      description: "Taahhüt ettiğimiz hizmetleri zamanında ve eksiksiz sunarız",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Profesyonellik",
      description: "Sektör tecrübesi ve uzman kadromuzla kaliteli hizmet",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "Yenilikçilik",
      description: "Modern teknoloji ve yönetim yaklaşımlarıyla hizmet",
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
      description: "Her çalışanımız değerli bir takım üyesidir. Birlikte çalışarak, birbirimizi destekleyerek ve bilgi paylaşımıyla en iyi sonuçları elde ederiz.",
      color: "from-blue-500 to-cyan-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Açık İletişim",
      description: "Müşterilerimiz, çalışanlarımız ve iş ortaklarımızla her zaman açık, dürüst ve şeffaf iletişim kurarız.",
      color: "from-emerald-500 to-teal-500",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-50"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Sonuç Odaklılık",
      description: "Karşılaştığımız her soruna çözüm üretir, hedeflerimize ulaşmak için stratejik adımlar atarız.",
      color: "from-purple-500 to-indigo-500",
      bgPattern: "bg-gradient-to-br from-purple-50 to-indigo-50"
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Sürekli Gelişim",
      description: "Sektördeki yenilikleri takip eder, eğitimlerle kendimizi sürekli geliştiririz. Her deneyimi öğrenme fırsatı olarak görürüz.",
      color: "from-orange-500 to-red-500",
      bgPattern: "bg-gradient-to-br from-orange-50 to-red-50"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Müşteri Memnuniyeti",
      description: "Her kararımızda müşteri memnuniyetini ön planda tutar, beklentileri aşmak için çalışırız.",
      color: "from-pink-500 to-rose-500",
      bgPattern: "bg-gradient-to-br from-pink-50 to-rose-50"
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Güvenilirlik",
      description: "Sözlerimizi tutar, sorumluluklarımızı zamanında ve eksiksiz yerine getiririz. Güvenilirlik en temel değerimizdir.",
      color: "from-slate-500 to-gray-500",
      bgPattern: "bg-gradient-to-br from-slate-50 to-gray-50"
    }
  ]

  const stats = [
    { number: "15+", label: "Yıl Deneyim", icon: <Star className="w-6 h-6" /> },
    { number: "100+", label: "Mutlu Müşteri", icon: <Heart className="w-6 h-6" /> },
    { number: "50+", label: "Yönetilen Site", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Destek Hizmeti", icon: <Zap className="w-6 h-6" /> }
  ]

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
            15 yıllık deneyimimizle Balıkesir genelinde profesyonel apartman ve site yönetimi hizmetleri sunuyoruz.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
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
                  <strong className="text-slate-900">Gürel Yönetim</strong>, Balıkesir genelinde{' '}
                  <strong className="text-blue-600">profesyonel apartman, site ve mülk yönetimi</strong>{' '}
                  alanında uzmanlaşmış, sektörde referans gösterilen bir yönetim firmasıdır.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  <strong>Gürel Yönetim olarak</strong>, toplu yaşam alanlarında{' '}
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-md mx-1 text-sm">aidat yönetimi</span>,{' '}
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md mx-1 text-sm">bütçe planlaması</span>,{' '}
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded-md mx-1 text-sm">bakım ve onarım süreçleri</span>{' '}
                  gibi temel ihtiyaçları teknoloji odaklı ve şeffaf çözümlerle yönetiyoruz.
                </p>
              </div>
            </div>

            {/* Mission & Vision Tabs */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl overflow-hidden">
                {/* Tab Navigation */}
                <div className="flex border-b border-slate-200/50">
                  <button
                    onClick={() => setActiveTab('mission')}
                    className={`flex-1 px-6 py-4 text-sm font-semibold transition-all duration-300 ${
                      activeTab === 'mission'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <Target className="w-4 h-4 inline mr-2" />
                    Misyonumuz
                  </button>
                  <button
                    onClick={() => setActiveTab('vision')}
                    className={`flex-1 px-6 py-4 text-sm font-semibold transition-all duration-300 ${
                      activeTab === 'vision'
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <Award className="w-4 h-4 inline mr-2" />
                    Vizyonumuz
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-8">
                  {activeTab === 'mission' ? (
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Target className="w-5 h-5 text-blue-500" />
                        Misyonumuz
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        Mülk sahiplerinin ve site sakinlerinin yaşam kalitesini yükseltmek, gayrimenkul değerlerini artırmak ve şeffaf,
                        güvenilir ve profesyonel bir yönetim sistemi ile tüm paydaşlarımıza maksimum fayda sağlamaktır.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Award className="w-5 h-5 text-emerald-500" />
                        Vizyonumuz
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        Balıkesir genelinde profesyonel apartman ve site yönetiminin referans noktası olmak, teknoloji odaklı yönetim
                        standartları geliştirerek sektörün gelişimine öncülük etmek ve müşteri memnuniyetinde daima ilk sırada yer almaktır.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

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