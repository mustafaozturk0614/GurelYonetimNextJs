import { LucideIcon, Users, Building, Award, MapPin, Phone } from 'lucide-react'

// Şirket İstatistikleri için arayüz
export interface CompanyStats {
  number: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

export const companyStats: CompanyStats[] = [
  { number: "3+", label: "Yıl Deneyim", icon: Award, color: "text-purple-500" },
  { number: "500+", label: "Memnun Müşteri", icon: Users, color: "text-blue-500" },
  { number: "50+", label: "Aktif Site", icon: Building, color: "text-emerald-500" },
  { number: "9", label: "Hizmet Bölgesi", icon: MapPin, color: "text-amber-500" },
  { number: "24/7", label: "Destek Hizmeti", icon: Phone, color: "text-green-500" }
]

export const regions = [
  "Edremit", "Akçay", "Güre", "Burhaniye", 
  "Küçükkuyu", "Altınoluk", "Pelitköy", "Gömeç", "Ayvalık"
]

