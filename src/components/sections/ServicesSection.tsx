'use client'
import { useState, useRef, useEffect } from 'react'
import { 
  CheckCircle, 
  Calculator, 
  Brush, 
  Scale, 
  Wrench, 
  Leaf, 
  Shield, 
  Thermometer, 
  Key, 
  AlertTriangle, 
  Gavel, 
  BarChart3, 
  Building, 
  Droplets,
  ArrowRight,
  Sparkles,
  Star,
  Zap,
  Eye,
  ChevronRight
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceFeature {
  icon: React.ReactNode
  text: string
}

interface ServiceBadge {
  text: string
  variant: 'primary' | 'secondary' | 'accent'
}

interface ServiceItem {
  id: string
  title: string
  description: string
  image: string
  icon: React.ReactNode
  features: ServiceFeature[]
  badges: ServiceBadge[]
  detailUrl: string
  color: string
  gradient: string
}

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<'site' | 'property'>('site')
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Intersection Observer için görünürlük kontrolü
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Site Yönetimi Hizmetleri
  const siteServices: ServiceItem[] = [
    {
      id: 'muhasebe',
      title: 'Muhasebe ve Aidat Yönetimi',
      description: 'Tüm aidat işlemlerini ve site finansmanınızı dijital olarak takip ediyor, gelir-gider dengenizi şeffaf bir şekilde raporluyoruz. Güvenli ödeme altyapısı ve otomatik hatırlatmalar ile finansal süreçlerinizde hiçbir aksaklık yaşamazsınız.',
      image: '/assets/newimg/muhasebe2-min.png',
      icon: <Calculator className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      features: [
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Dijital aidat takibi ve otomatik ödeme bildirimleri' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Aylık ve yıllık gelir-gider raporları' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Şeffaf ve kolay anlaşılır finans yönetimi' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Site sakinlerine online bilgilendirme' }
      ],
      badges: [
        { text: 'Dijital Takip', variant: 'primary' },
        { text: 'Tam Şeffaflık', variant: 'secondary' }
      ],
      detailUrl: '/services/muhasebe-aidat'
    },
    {
      id: 'temizlik',
      title: 'Profesyonel Temizlik',
      description: 'Ortak alanların periyodik temizliğini titizlikle gerçekleştiriyor, hijyen standartlarını en üst seviyede tutuyoruz. Çevre dostu temizlik ürünleriyle, sitenizin her zaman sağlıklı ve ferah kalmasını sağlıyoruz.',
      image: '/assets/newimg/temizlik1-min.png',
      icon: <Brush className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-500',
      gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      features: [
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Düzenli ortak alan temizliği (merdiven, asansör, otopark)' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Dış cephe, cam ve zemin özel bakımı' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Alerjen içermeyen, çevre dostu temizlik ürünleri' }
      ],
      badges: [
        { text: 'Hijyen Garantisi', variant: 'primary' },
        { text: 'Ekolojik', variant: 'accent' }
      ],
      detailUrl: '/services/temizlik'
    },
    {
      id: 'hukuk',
      title: 'Hukuk ve Danışmanlık',
      description: 'Site yönetimiyle ilgili tüm hukuki süreçlerde yanınızda oluyoruz. Kat Mülkiyeti Kanunu, aidat ve borç tahsilatı, yönetim planı ve sözleşme hazırlıkları gibi konularda uzman desteğiyle risksiz bir yönetim sunuyoruz.',
      image: '/assets/newimg/hukuk1-min.png',
      icon: <Scale className="w-6 h-6" />,
      color: 'from-purple-500 to-indigo-500',
      gradient: 'bg-gradient-to-br from-purple-50 to-indigo-50',
      features: [
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Kat Mülkiyeti Kanunu danışmanlığı' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Aidat ve borç tahsilatı süreç yönetimi' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Yönetim planı ve sözleşme hazırlığı' }
      ],
      badges: [
        { text: 'Uzman Kadro', variant: 'primary' },
        { text: 'Yasal Güvence', variant: 'secondary' }
      ],
      detailUrl: '/services/hukuk'
    },
    {
      id: 'bakim',
      title: 'Bakım ve Onarım',
      description: 'Elektrik, su, asansör ve tüm ortak alan sistemlerinin düzenli bakımı ve hızlı arıza onarımları için tecrübeli teknik ekibimizle her zaman yanınızdayız. Kesintisiz hizmet ve uzun ömürlü altyapı için güvenle tercih edebilirsiniz.',
      image: '/assets/newimg/bakimonarim1-min.png',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      gradient: 'bg-gradient-to-br from-orange-50 to-red-50',
      features: [
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Elektrik, su ve tesisat bakımı' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Asansör kontrolleri ve periyodik bakım' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Acil arızalara hızlı müdahale' }
      ],
      badges: [
        { text: '7/24 Destek', variant: 'primary' },
        { text: 'Garantili Servis', variant: 'secondary' }
      ],
      detailUrl: '/services/bakim-onarim'
    },
    {
      id: 'bahce',
      title: 'Bahçe ve Peyzaj',
      description: 'Bahçenizin peyzaj tasarımından mevsimsel bakım ve sulama işlemlerine kadar tüm süreçlerde, sitenize değer katacak çözümler sunuyoruz. Bitki sağlığı, çim bakımı ve düzenli budama ile estetik ve bakımlı bir ortam sağlıyoruz.',
      image: '/assets/newimg/bahce3-min.png',
      icon: <Leaf className="w-6 h-6" />,
      color: 'from-green-500 to-lime-500',
      gradient: 'bg-gradient-to-br from-green-50 to-lime-50',
      features: [
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Profesyonel peyzaj tasarımı ve uygulama' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Mevsimsel bakım, budama ve ilaçlama' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Çim alanı ve otomatik sulama sistemleri' }
      ],
      badges: [
        { text: 'Estetik Tasarım', variant: 'primary' },
        { text: 'Düzenli Bakım', variant: 'secondary' }
      ],
      detailUrl: '/services/bahce-peyzaj'
    },
    {
      id: 'guvenlik',
      title: '7/24 Güvenlik',
      description: 'Profesyonel güvenlik ekibi, kamera sistemleri ve giriş/çıkış kontrolü ile sitenizin huzur ve güvenliğini en üst seviyede sağlıyoruz. Modern teknolojilerle sürekli izleme ve acil durumlarda anında müdahale desteği sunuyoruz.',
      image: '/assets/newimg/guvenlik2-min.png',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-slate-500 to-gray-600',
      gradient: 'bg-gradient-to-br from-slate-50 to-gray-50',
      features: [
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Güvenlik personeli ve danışmanlığı' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Kamera ve geçiş kontrol sistemleri' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Acil durumlara 7/24 müdahale' }
      ],
      badges: [
        { text: 'Yüksek Güvenlik', variant: 'primary' },
        { text: 'Sürekli İzleme', variant: 'secondary' }
      ],
      detailUrl: '/services/guvenlik'
    },
    {
      id: 'kalorifer',
      title: 'Kalorifer ve Baca Hizmetleri',
      description: 'Isıtma sistemlerinizin, doğalgaz tesisatınızın ve bacalarınızın düzenli bakım ve temizliğiyle, sağlıklı ve güvenli bir ortam sağlıyoruz. Uzman kadromuz sayesinde arızasız ve verimli bir ısınma deneyimi yaşarsınız.',
      image: '/assets/newimg/baca1-min.png',
      icon: <Thermometer className="w-6 h-6" />,
      color: 'from-amber-500 to-yellow-500',
      gradient: 'bg-gradient-to-br from-amber-50 to-yellow-50',
      features: [
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Kazan dairesi ve tesisat bakımı' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Doğalgaz ve ısıtma sistemleri kontrolü' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Baca temizliği ve periyodik güvenlik' }
      ],
      badges: [
        { text: 'Sağlık ve Güvenlik', variant: 'primary' },
        { text: 'Periyodik Hizmet', variant: 'secondary' }
      ],
      detailUrl: '/services/kalorifer-baca'
    },
    {
      id: 'havuz',
      title: 'Havuz Bakım Hizmetleri',
      description: 'Havuzunuzun su kalitesini ve hijyenini yıl boyu koruyoruz. Kimyasal denge, filtrasyon ve düzenli bakım ile sağlıklı, temiz ve kullanıma hazır havuz ortamı sunuyoruz.',
      image: '/assets/newimg/havuzbakim2.jpeg',
      icon: <Droplets className="w-6 h-6" />,
      color: 'from-sky-500 to-blue-500',
      gradient: 'bg-gradient-to-br from-sky-50 to-blue-50',
      features: [
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Düzenli su kalitesi ve kimyasal kontrolleri' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Filtrasyon sistemi ve ekipman bakımı' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Hijyenik temizlik ve periyodik bakım' }
      ],
      badges: [
        { text: 'Hijyenik Su', variant: 'primary' },
        { text: 'Düzenli Bakım', variant: 'secondary' }
      ],
      detailUrl: '/services/havuz-bakim'
    }
  ]

  // Mülk Yönetimi Hizmetleri
  const propertyServices: ServiceItem[] = [
    {
      id: 'kiralama',
      title: 'Kiralama ve Yatırım Takibi',
      description: 'Ev, yazlık ve ticari mülklerinizin kiralama süreçlerini baştan sona şeffaf ve güvenilir şekilde yürütüyoruz. Kiracı seçiminden kira tahsilatına, tüm süreçlerinizde yasal ve mali riskleri en aza indiriyoruz.',
      image: '/assets/newimg/apartment-min.png',
      icon: <Key className="w-6 h-6" />,
      color: 'from-rose-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-rose-50 to-pink-50',
      features: [
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Profesyonel kiracı bulma ve seçim' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Kira sözleşmesi hazırlama ve takip' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Kira ve aidat tahsilatı yönetimi' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Gelir ve masraf raporlaması' }
      ],
      badges: [
        { text: 'Yatırım Güvencesi', variant: 'primary' },
        { text: 'Dijital Yönetim', variant: 'secondary' }
      ],
      detailUrl: '/services/kiralama-surecleri'
    },
    {
      id: 'acil',
      title: '7/24 Acil Destek ve Bakım',
      description: 'Mülklerinizde oluşabilecek arıza, bakım ve acil durumlarda, hızlı ve çözüm odaklı teknik destek sağlıyoruz. Planlı periyodik kontroller ve anlık müdahalelerle mülklerinizin sürekli değerini koruyoruz.',
      image: '/assets/newimg/bakimonarim2-min.png',
      icon: <AlertTriangle className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500',
      gradient: 'bg-gradient-to-br from-red-50 to-orange-50',
      features: [
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: '7/24 acil müdahale hattı' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Periyodik bakım ve arıza tespiti' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Uzman teknik ekip ile hızlı çözüm' }
      ],
      badges: [
        { text: 'Hızlı Çözüm', variant: 'primary' },
        { text: 'Sürekli Destek', variant: 'secondary' }
      ],
      detailUrl: '/services/acil-bakim'
    },
    {
      id: 'hukuki',
      title: 'Hukuki Süreç ve Vergi Takibi',
      description: 'Kiralama ve sahiplik sürecindeki tüm yasal işlemlerde, hak kaybı yaşamadan sorunsuz ilerlemeniz için kapsamlı danışmanlık ve takibini üstleniyoruz. Vergi ve beyan yükümlülüklerinizi zamanında ve doğru şekilde yerine getirmenize yardımcı oluyoruz.',
      image: '/assets/newimg/hukuk2-min.png',
      icon: <Gavel className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      gradient: 'bg-gradient-to-br from-indigo-50 to-purple-50',
      features: [
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Kira kontrat yönetimi ve yasal işlemler' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Kiracı tahliye ve arabuluculuk desteği' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Emlak vergisi ve beyanname takibi' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Resmi kurumlarda tam temsil' }
      ],
      badges: [
        { text: 'Yasal Güvence', variant: 'primary' },
        { text: 'Uzman Takip', variant: 'secondary' }
      ],
      detailUrl: '/services/hukuki-vergi'
    },
    {
      id: 'temsil',
      title: 'Temsil ve Raporlama',
      description: 'Mülk sahiplerinin haklarını koruyor, işlemlerini resmi kurumlar ve platformlarda titizlikle yürütüyoruz. Ayrıca periyodik ve şeffaf raporlamayla her aşamada sizi bilgilendiriyoruz.',
      image: '/assets/newimg/gmy2.png',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-teal-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-teal-50 to-cyan-50',
      features: [
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Mülk sahibi adına resmi işlem takibi' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Aylık veya dönemsel durum raporları' },
        { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Görsel belge ve güncel bilgilendirme' }
      ],
      badges: [
        { text: 'Şeffaf Bilgilendirme', variant: 'primary' },
        { text: 'Detaylı Rapor', variant: 'secondary' }
      ],
      detailUrl: '/services/temsil-raporlama'
    }
  ]

  const currentServices = activeTab === 'site' ? siteServices : propertyServices

  // Badge stil fonksiyonu
  const getBadgeStyles = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
      case 'secondary':
        return 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
      case 'accent':
        return 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/25'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Arka plan dekoratif elementler */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-rose-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık Bölümü */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide uppercase">Hizmetlerimiz</span>
            <Sparkles className="w-6 h-6 text-purple-500 animate-pulse" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Profesyonel{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Yönetim Hizmetleri
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Site ve mülk yönetiminde uzman ekibimizle, güvenilir ve modern çözümler sunuyoruz.
            Her ihtiyacınız için özel olarak tasarlanmış hizmet paketlerimizi keşfedin.
          </p>
        </div>

        {/* Tab Seçici */}
        <div className={`flex justify-center mb-12 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/20">
            <div className="flex">
              {[
                { key: 'site', label: 'Site Yönetimi', icon: <Building className="w-5 h-5" /> },
                { key: 'property', label: 'Mülk Yönetimi', icon: <Key className="w-5 h-5" /> }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as 'site' | 'property')}
                  className={`relative flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 transform scale-105'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  {activeTab === tab.key && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30 -z-10"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hizmet Kartları Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentServices.map((service, index) => (
            <div
              key={service.id}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Ana Kart - Sabit yükseklik */}
              <div className={`relative h-[620px] bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/30 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] ${service.gradient} group-hover:bg-white/95 flex flex-col overflow-hidden`}>
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Hizmet Resmi - Sabit yükseklik ve aspect ratio */}
                <div className="relative mb-4 overflow-hidden rounded-xl bg-gray-100 h-44 flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={320}
                    height={176}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  
                  {/* Floating Icon - Sabit pozisyon */}
                  <div className={`absolute top-3 right-3 w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white shadow-lg transform transition-all duration-500 group-hover:scale-110`}>
                    <div className="w-6 h-6 flex items-center justify-center">{service.icon}</div>
                  </div>
                </div>

                {/* Hizmet Bilgileri - Flex container */}
                <div className="relative z-10 flex flex-col flex-grow">
                  
                  {/* Başlık - Sabit yükseklik */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300 h-12 flex items-start leading-tight line-clamp-2">
                    {service.title}
                  </h3>
                  
                  {/* Badges - Üstte sabit */}
                  <div className="flex flex-wrap gap-1.5 mb-4 min-h-[2rem]">
                    {service.badges.slice(0, 2).map((badge, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${getBadgeStyles(badge.variant)} whitespace-nowrap`}
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>

                  {/* Açıklama - Sabit yükseklik */}
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300 h-16 overflow-hidden leading-relaxed line-clamp-3">
                    {service.description.length > 100 
                      ? service.description.substring(0, 100) + '...' 
                      : service.description
                    }
                  </p>

                  {/* Özellikler - Sabit yükseklik */}
                  <div className="space-y-2 mb-6 h-20 overflow-hidden">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <div className="flex-shrink-0 mt-0.5 w-4 h-4">{feature.icon}</div>
                        <span className="text-gray-700 leading-tight line-clamp-1">
                          {feature.text.length > 40 
                            ? feature.text.substring(0, 40) + '...' 
                            : feature.text
                          }
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Detay Butonu - Alt kısımda sabit */}
                  <div className="mt-auto pt-2">
                    <Link
                      href={service.detailUrl}
                      className={`inline-flex items-center gap-2 w-full justify-center px-5 py-3 bg-gradient-to-r ${service.color} text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group-hover:from-gray-800 group-hover:to-gray-900`}
                    >
                      <span>Detayları Gör</span>
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Hover Efekti - Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}></div>
              </div>

              {/* Floating Animation */}
              {hoveredService === service.id && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
              )}
            </div>
          ))}
        </div>

        {/* Alt Bilgi Bölümü */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-yellow-300 animate-pulse" />
              <h3 className="text-2xl font-bold">Neden Bizi Seçmelisiniz?</h3>
              <Star className="w-8 h-8 text-yellow-300 animate-pulse" />
            </div>
            <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
              15+ yıllık deneyimimiz, 1000+ memnun müşterimiz ve 7/24 kesintisiz hizmet anlayışımızla 
              gayrimenkul yönetiminde güvenilir çözüm ortağınız.
            </p>
            <div className="flex items-center justify-center gap-8 mt-6">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Hızlı Çözüm</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Güvenilir Hizmet</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Şeffaf Süreç</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection