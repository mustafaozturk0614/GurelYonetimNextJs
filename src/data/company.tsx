import { CompanyStats, FeaturedService } from '@/types'
import { Building2, Wrench, RectangleVertical as CleaningServices } from 'lucide-react'

export const companyStats: CompanyStats[] = [
  { number: "15+", label: "Yıl Deneyim" },
  { number: "100+", label: "Mutlu Müşteri" },
  { number: "50+", label: "Yönetilen Site" },
  { number: "24/7", label: "Destek Hizmeti" }
]

export const regions = [
  "Edremit", "Akçay", "Güre", "Burhaniye", 
  "Küçükkuyu", "Altınoluk", "Pelitköy", "Gömeç", "Ayvalık"
]

export const featuredServices: FeaturedService[] = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Site & Apartman Yönetimi",
    description: "Profesyonel yönetim hizmetleri ile yaşam alanlarınızı daha değerli kılıyoruz.",
    features: ["Apsiyon Sistemi", "Finansal Raporlama", "7/24 Destek"]
  },
  {
    icon: <CleaningServices className="w-6 h-6" />,
    title: "Temizlik & Bakım Hizmetleri",
    description: "Ortak alanlarınızın hijyeni ve düzeni için profesyonel temizlik hizmetleri.",
    features: ["Profesyonel Ekip", "Çevre Dostu Ürünler", "Düzenli Program"]
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Teknik Hizmetler",
    description: "Bakım, onarım ve teknik destek hizmetleri ile sorunsuz yaşam.",
    features: ["Uzman Teknisyen", "Periyodik Bakım", "Acil Müdahale"]
  }
]