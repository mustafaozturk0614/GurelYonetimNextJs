import { Building2, Wrench, Scale, Activity as Security, RectangleVertical as CleaningServices } from 'lucide-react'
import { Service } from '@/types'

export const services: Service[] = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Site ve Apartman Yönetimi",
    description: "Profesyonel yönetim hizmetleri, aidat takibi ve finansal raporlama",
    features: ["Apsiyon sistemi ile aidat yönetimi", "Şeffaf finansal raporlama", "Bütçe planlaması"],
    details: [
      "Modern yönetim sistemleri kullanarak sitenizin tüm işlemlerini dijital ortamda takip ediyoruz.",
      "Aylık gelir-gider raporları ile tam şeffaflık sağlıyoruz.",
      "Yasal mevzuata uygun tüm işlemleri gerçekleştiriyoruz."
    ],
    pricing: "Aylık yönetim ücreti site büyüklüğüne göre belirlenir. Detaylı fiyat teklifi için iletişime geçin."
  },
  {
    icon: <CleaningServices className="w-8 h-8" />,
    title: "Temizlik Hizmetleri",
    description: "Ortak alan temizliği ve düzenli bakım programları",
    features: ["Profesyonel ekip", "Hijyen standartları", "Düzenli temizlik programı"],
    details: [
      "Eğitimli ve deneyimli temizlik personeli ile hizmet veriyoruz.",
      "Çevre dostu temizlik ürünleri kullanıyoruz.",
      "Haftalık, aylık veya özel program seçenekleri sunuyoruz."
    ],
    pricing: "Temizlik alanı ve sıklığına göre uygun fiyat seçenekleri mevcuttur."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Teknik Hizmetler",
    description: "Bakım, onarım ve teknik destek hizmetleri",
    features: ["Baca ve kalorifer bakımı", "Havuz bakım hizmetleri", "Düzenli kontrol programları"],
    details: [
      "Uzman teknisyenlerimiz ile tüm teknik sorunlarınızı çözüyoruz.",
      "Periyodik bakım programları ile arızaları önlüyoruz.",
      "7/24 acil teknik destek hizmeti sunuyoruz."
    ],
    pricing: "Hizmet türüne göre saatlik veya proje bazlı fiyatlandırma yapılır."
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Danışmanlık Hizmetleri",
    description: "Hukuk, güvenlik ve yönetim danışmanlığı",
    features: ["Hukuk danışmanlığı", "İş güvenliği uzmanı", "Yönetim danışmanlığı"],
    details: [
      "Deneyimli hukuk danışmanlarımız ile yasal süreçlerde yanınızdayız.",
      "İş güvenliği mevzuatına uyum konusunda destek sağlıyoruz.",
      "Yönetim süreçlerini optimize etmek için öneriler sunuyoruz."
    ],
    pricing: "Danışmanlık türüne göre saatlik veya aylık paket fiyatları mevcuttur."
  },
  {
    icon: <Security className="w-8 h-8" />,
    title: "Güvenlik Hizmetleri",
    description: "7/24 güvenlik ve güvenlik sistemleri yönetimi",
    features: ["Site güvenlik hizmetleri", "Güvenlik sistemleri", "7/24 kontrol"],
    details: [
      "Eğitimli güvenlik personeli ile 7/24 hizmet veriyoruz.",
      "Modern güvenlik sistemleri kurulum ve bakımını yapıyoruz.",
      "Acil durum müdahale planları hazırlıyoruz."
    ],
    pricing: "Güvenlik ihtiyacınıza göre özel fiyat teklifi hazırlanır."
  }
]