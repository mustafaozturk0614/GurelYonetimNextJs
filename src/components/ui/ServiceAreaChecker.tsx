import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { regions } from '@/data/company'
import { motion } from 'framer-motion'

const normalizeTurkishChars = (str: string) => {
  return str
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
}

const ServiceAreaChecker = () => {
  const [serviceAreaInput, setServiceAreaInput] = useState('')
  const [serviceAreaResult, setServiceAreaResult] = useState<{ found: boolean; message: string } | null>(null)
  const [filteredRegions, setFilteredRegions] = useState<string[]>([])

  const checkServiceArea = () => {
    const normalizedInput = normalizeTurkishChars(serviceAreaInput.toLowerCase().trim())
    let foundRegion = ''

    const found = regions.some(region => {
      const normalizedRegion = normalizeTurkishChars(region.toLowerCase())
      // Kullanıcının girdiği metin bölge adını içeriyor mu? (örn: "edremit merkez" -> "edremit")
      if (normalizedInput.includes(normalizedRegion)) {
        foundRegion = region
        return true
      }
      // Bölge adı kullanıcının girdiği metni içeriyor mu? (örn: "edremit" -> "edre")
      // Çok kısa girdiler için yanlış pozitifleri önlemek için minimum 2 karakter sınırı ekledim.
      if (normalizedRegion.includes(normalizedInput) && normalizedInput.length >= 2) {
        foundRegion = region
        return true
      }
      return false
    })
    
    setServiceAreaResult({
      found,
      message: found 
        ? `Harika! ${foundRegion} bölgesinde hizmet veriyoruz. Hemen iletişime geçin!`
        : `Üzgünüz, ${serviceAreaInput} bölgesinde henüz hizmet vermiyoruz. Ancak yakın gelecekte genişleme planlarımız var.`
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    setServiceAreaInput(input)

    if (input.length > 0) {
      const normalizedInput = normalizeTurkishChars(input.toLowerCase())
      const filtered = regions.filter(region =>
        normalizeTurkishChars(region.toLowerCase()).includes(normalizedInput)
      )
      setFilteredRegions(filtered)
    } else {
      setFilteredRegions([])
    }
    setServiceAreaResult(null) // Arama alanı değiştiğinde sonucu sıfırla
  }

  const handleSelectRegion = (region: string) => {
    setServiceAreaInput(region)
    setFilteredRegions([]) // Seçim yapıldıktan sonra önerileri temizle
    setServiceAreaResult(null) // Seçim yapıldıktan sonra sonucu sıfırla
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-20 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200/50 max-w-2xl mx-auto shadow-lg"
    >
      <h4 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4 justify-center">
        <MapPin className="w-6 h-6 text-blue-500" />
        Hizmet Bölgemizi Sorgulayın
      </h4>
      <p className="text-slate-600 text-center mb-6">Bölgenizde hizmet verip vermediğimizi öğrenmek için ilçe veya semt adını girin.</p>
      <div className="relative flex gap-3 mb-4">
        <div className="relative flex-1">
          <input 
            type="text" 
            placeholder="İlçe veya semt adını yazın"
            value={serviceAreaInput}
            onChange={handleInputChange}
            onKeyPress={(e) => e.key === 'Enter' && checkServiceArea()}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-800"
          />
          {filteredRegions.length > 0 && (
            <div className="absolute z-20 w-full bg-white border border-slate-200 rounded-xl shadow-lg mt-1 max-h-48 overflow-y-auto left-0 right-0 mx-auto max-w-md">
              {filteredRegions.map((region, index) => (
                <div
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-slate-100 transition-colors duration-200 text-slate-800"
                  onClick={() => handleSelectRegion(region)}
                >
                  {region}
                </div>
              ))}
            </div>
          )}
        </div>
        <button 
          onClick={checkServiceArea}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95"
        >
          Kontrol Et
        </button>
      </div>
      {serviceAreaResult && (
        <div className={`p-4 rounded-xl ${serviceAreaResult.found ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'} mt-4`}>
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
    </motion.div>
  )
}

export default ServiceAreaChecker 