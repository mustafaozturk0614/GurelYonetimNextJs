import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react'
import ContactForm from '@/components/ui/ContactForm'

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            İletişime Geçin
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Profesyonel hizmetlerimiz hakkında bilgi almak için 
            bizimle iletişime geçin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                <p className="text-gray-300">0530 555 60 07</p>
                <p className="text-sm text-gray-400 mt-1">7/24 WhatsApp desteği</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">E-posta</h3>
                <p className="text-gray-300">gurelyonetim@gmail.com</p>
                <p className="text-sm text-gray-400 mt-1">24 saat içinde yanıt</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Adres</h3>
                <p className="text-gray-300">
                  Soğanyemez, 513. Sk. No:6/19<br />
                  10300 Edremit/Balıkesir
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-800 to-green-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Teknolojik Altyapımız</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Apsiyon yönetim sistemi
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Online aidat takip sistemi
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Dijital raporlama araçları
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  WhatsApp hızlı iletişim
                </li>
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection