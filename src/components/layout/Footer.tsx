import { Building2, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-blue-400" />
              <div>
                <div className="text-xl font-bold">Gürel Yönetim</div>
                <div className="text-sm text-gray-400">Profesyonel Hizmet</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Edremit bölgesinde profesyonel site ve apartman yönetimi hizmetleri. 
              Modern yönetim anlayışı ile yanınızdayız.
            </p>
            <div className="text-sm text-gray-400">
              © 2024 Gürel Yönetim. Tüm hakları saklıdır.
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Site Yönetimi</li>
              <li>Apartman Yönetimi</li>
              <li>Temizlik Hizmetleri</li>
              <li>Teknik Hizmetler</li>
              <li>Güvenlik Hizmetleri</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                0530 555 60 07
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                gurelyonetim@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Soğanyemez, 513. Sk. No:6/19<br />10300 Edremit/Balıkesir</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer