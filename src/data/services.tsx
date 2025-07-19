import { ServiceItem } from '@/types'
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
  Droplets
 
} from 'lucide-react'



  // Site Yönetimi Hizmetleri
  export const siteServices: ServiceItem[] = [
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
  export const propertyServices: ServiceItem[] = [
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

  // Tüm hizmetleri birleştiren dizi
  export const allServices: ServiceItem[] = [...siteServices, ...propertyServices]