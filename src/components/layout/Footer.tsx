import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Linkedin, 
  MessageSquare, 
  Clock, 
  ArrowRight,
  Star,
  Award,
  Users,
  Building,
  Heart,
  Send,
  Globe,
  Shield,
  Zap
} from 'lucide-react'
import { regions } from '@/data/company'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Hizmet kategorileri
  const serviceCategories = [
    { name: 'Site Yönetimi', icon: Building },
    { name: 'Apartman Yönetimi', icon: Users },
    { name: 'Temizlik Hizmetleri', icon: Star },
    { name: 'Teknik Hizmetler', icon: Zap },
    { name: 'Güvenlik Hizmetleri', icon: Shield },
    { name: 'Danışmanlık', icon: Award }
  ]

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Arkaplan Efektleri */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/3 rounded-full blur-3xl" />
      </div>

      {/* Ana İçerik */}
      <div className="relative z-10">
        {/* Ana Footer İçeriği */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

              {/* Şirket Bilgileri */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-2"
              >
                <Link href="/" className="flex items-center mb-6 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-white block">GÜREL YÖNETİM</span>
                    <span className="text-blue-400 text-sm">Profesyonel Site Yönetimi</span>
                  </div>
                </Link>
                
                <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                  Temmuz 2022&apos;de kurulan Gürel Yönetim, müşteri memnuniyeti odaklı ve profesyonel hizmet anlayışıyla 
                  Balıkesir&apos;in 9 farklı bölgesinde hizmet vermektedir.
                </p>

                {/* Hizmetler */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Hizmetlerimiz</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceCategories.map((service, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                        <service.icon className="w-5 h-5 text-blue-400 mr-3" />
                        <span className="text-gray-300 text-sm">{service.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* İletişim Bilgileri */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">İletişim</h4>
                  <div className="space-y-3">
                    <a href="tel:+905305556007" className="flex items-center group hover:text-blue-400 transition-colors">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-500/30 transition-colors">
                        <Phone className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <div className="text-white font-medium">0530 555 60 07</div>
                        <div className="text-gray-400 text-sm">Pazartesi - Cumartesi</div>
                      </div>
                    </a>
                    
                    <a href="mailto:gurelyonetim@gmail.com" className="flex items-center group hover:text-blue-400 transition-colors">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors">
                        <Mail className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-white font-medium">gurelyonetim@gmail.com</div>
                        <div className="text-gray-400 text-sm">7/24 E-posta Desteği</div>
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Hizmet Bölgeleri */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">Hizmet Bölgelerimiz</h4>
                <div className="space-y-2 mb-8">
                  {regions.map((region, index) => (
                    <div key={index} className="flex items-center p-2 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors">
                      <MapPin className="w-4 h-4 text-blue-400 mr-3" />
                      <span className="text-gray-300 text-sm">{region}</span>
                    </div>
                  ))}
                </div>

                {/* Çalışma Saatleri */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-6 border border-gray-700/50">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Clock className="w-5 h-5 text-blue-400 mr-2" />
                    Çalışma Saatleri
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Pazartesi - Cuma</span>
                      <span className="text-green-400 font-medium">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Cumartesi</span>
                      <span className="text-yellow-400 font-medium">09:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Pazar</span>
                      <span className="text-red-400 font-medium">Kapalı</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Konum ve Sosyal Medya */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">Konum & Sosyal Medya</h4>
                
                {/* Adres */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-6 border border-gray-700/50 mb-6">
                  <div className="flex items-start mb-4">
                    <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                    <address className="text-gray-300 text-sm leading-relaxed not-italic">
                      Soğanyemez, 513. Sk. No:6/19,<br />
                      10300 Edremit/Balıkesir
                    </address>
                  </div>
                  <a
                    href="https://goo.gl/maps/nLq8nY6W5Z7B4XYKA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Haritada Göster
                  </a>
                </div>

                {/* Sosyal Medya */}
                <div className="mb-6">
                  <h5 className="text-white font-medium mb-4">Bizi Takip Edin</h5>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="https://www.instagram.com/gurel_yonetim/" target="_blank" rel="noopener" 
                       className="flex items-center p-3 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300 group">
                      <Instagram className="w-5 h-5 text-pink-400 mr-2 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 text-sm">Instagram</span>
                    </a>
                    <a href="https://www.linkedin.com/company/gürel-yönetim/" target="_blank" rel="noopener" 
                       className="flex items-center p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 group">
                      <Linkedin className="w-5 h-5 text-blue-400 mr-2 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 text-sm">LinkedIn</span>
                    </a>
                    <a href="https://wa.me/905305556007" target="_blank" rel="noopener" 
                       className="flex items-center p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 group">
                      <MessageSquare className="w-5 h-5 text-green-400 mr-2 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 text-sm">WhatsApp</span>
                    </a>
                    <a href="#contact" 
                       className="flex items-center p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg hover:from-purple-500/30 hover:to-indigo-500/30 transition-all duration-300 group">
                      <Send className="w-5 h-5 text-purple-400 mr-2 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 text-sm">İletişim</span>
                    </a>
                  </div>
                </div>

                {/* Hızlı İletişim */}
                <Link 
                  href="#contact"
                  className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
                >
                  <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Hemen İletişime Geçin
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Alt Bar */}
        <div className="border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Gürel Yönetim. Tüm hakları saklıdır.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Gizlilik Politikası
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Kullanım Şartları
                </Link>
                <div className="text-gray-400">
                  Tasarım: <span className="text-blue-400 font-medium">Mustafa Öztürk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer