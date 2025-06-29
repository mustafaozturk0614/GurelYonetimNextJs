import { useState } from 'react'
import { ArrowRight, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { ContactFormData, FormStatus } from '@/types'

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: 'Site Yönetimi',
    message: ''
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Lütfen tüm zorunlu alanları doldurun.'
      })
      return
    }

    setStatus({
      type: 'loading',
      message: 'Mesajınız gönderiliyor...'
    })

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form data:', formData)
      
      setStatus({
        type: 'success',
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.'
      })
      
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Site Yönetimi',
        message: ''
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
      })
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl">
      <h3 className="text-2xl font-bold mb-6">Hızlı İletişim Formu</h3>
      
      {status.type !== 'idle' && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
          status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' :
          status.type === 'error' ? 'bg-red-50 text-red-800 border border-red-200' :
          'bg-blue-50 text-blue-800 border border-blue-200'
        }`}>
          {status.type === 'loading' && <Loader className="w-5 h-5 animate-spin" />}
          {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
          {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
          <span>{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Ad Soyad *</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Adınız ve soyadınız"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Telefon *</label>
            <input 
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Telefon numaranız"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">E-posta *</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="E-posta adresiniz"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Hizmet Türü</label>
          <select 
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="Site Yönetimi">Site Yönetimi</option>
            <option value="Apartman Yönetimi">Apartman Yönetimi</option>
            <option value="Temizlik Hizmetleri">Temizlik Hizmetleri</option>
            <option value="Teknik Hizmetler">Teknik Hizmetler</option>
            <option value="Danışmanlık">Danışmanlık</option>
            <option value="Güvenlik Hizmetleri">Güvenlik Hizmetleri</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Mesajınız *</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Detaylı bilgi ve taleplerinizi yazın..."
            required
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={status.type === 'loading'}
          className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
        >
          {status.type === 'loading' ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              Gönderiliyor...
            </>
          ) : (
            <>
              Mesaj Gönder
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default ContactForm