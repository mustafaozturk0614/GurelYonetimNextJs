import React, { useState, useCallback, useMemo } from 'react'
import { Send, User, Mail, MessageSquare, Loader, CheckCircle, AlertCircle, Phone, Settings } from 'lucide-react'

// Form veri tipleri
interface ContactFormData {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

// Form durumu tipleri
type FormStatus = 'idle' | 'loading' | 'success' | 'error'

// Form hata tipleri
interface FormErrors {
  [key: string]: string
}

// Hizmet seçenekleri
const SERVICE_OPTIONS = [
  { value: 'Site Yönetimi', label: 'Site Yönetimi' },
  { value: 'Apartman Yönetimi', label: 'Apartman Yönetimi' },
  { value: 'Temizlik Hizmetleri', label: 'Temizlik Hizmetleri' },
  { value: 'Teknik Hizmetler', label: 'Teknik Hizmetler' },
  { value: 'Danışmanlık', label: 'Danışmanlık' },
  { value: 'Güvenlik Hizmetleri', label: 'Güvenlik Hizmetleri' }
] as const

// Doğrulama fonksiyonları
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Ad soyad gereklidir'
        if (value.trim().length < 2) return 'En az 2 karakter olmalıdır'
        return ''
      case 'phone':
        if (!value.trim()) return 'Telefon numarası gereklidir'
        if (!/^[0-9+\-\s()]+$/.test(value)) return 'Geçerli telefon numarası girin'
        return ''
      case 'email':
        if (!value.trim()) return 'E-posta adresi gereklidir'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Geçerli e-posta adresi girin'
        return ''
      case 'message':
        if (!value.trim()) return 'Mesaj gereklidir'
        if (value.trim().length < 10) return 'En az 10 karakter yazın'
        return ''
      default:
        return ''
    }
  }

const ContactForm: React.FC = () => {
  // Form verileri
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: 'Site Yönetimi',
    message: ''
  })

  // Form durumu
  const [status, setStatus] = useState<FormStatus>('idle')
  const [statusMessage, setStatusMessage] = useState<string>('')
  const [errors, setErrors] = useState<FormErrors>({})

  // Input değişikliklerini yönet - useCallback ile optimize edildi
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    // Formu güncelle
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Eğer bu alan için hata varsa temizle
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }, [errors])

  // Form gönderimi
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Tüm alanları doğrula
    const newErrors: FormErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof ContactFormData])
      if (error) newErrors[key] = error
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setStatus('error')
      setStatusMessage('Lütfen tüm zorunlu alanları doğru şekilde doldurun.')
      return
    }

    setStatus('loading')
    setStatusMessage('Mesajınız gönderiliyor...')

    try {
      // API çağrısı simülasyonu
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form verileri:', formData)
      
      setStatus('success')
      setStatusMessage('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.')
      
      // Formu temizle
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Site Yönetimi',
        message: ''
      })
      setErrors({})
    } catch (error) {
      console.error(error)
      setStatus('error')
      setStatusMessage('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.')
    }
  }, [formData])

  // Durum mesajı stil hesaplaması - useMemo ile optimize edildi
  const statusStyles = useMemo(() => {
    switch (status) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800'
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
      case 'loading':
        return 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800'
      default:
        return ''
    }
  }, [status])

  return (
    <div className="max-w-2xl mx-auto">
      {/* Form Başlığı */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
          <CheckCircle className="w-4 h-4" />
          Ücretsiz Teklif Alın
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Hızlı İletişim
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Profesyonel hizmetlerimiz için hemen teklif alın
        </p>
      </div>

      {/* Durum Mesajı */}
      {status !== 'idle' && (
        <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${statusStyles}`}>
          {status === 'loading' && <Loader className="w-5 h-5 animate-spin" />}
          {status === 'success' && <CheckCircle className="w-5 h-5" />}
          {status === 'error' && <AlertCircle className="w-5 h-5" />}
          <span className="font-medium">{statusMessage}</span>
        </div>
      )}

      {/* Form */}
      <form 
        onSubmit={handleSubmit}
        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
      >
        <div className="space-y-6">
          {/* Kişisel Bilgiler */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Kişisel Bilgileriniz
            </h3>
            
            {/* Ad Soyad */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              <input
              type="text"
              name="name"
              value={formData.name}
                onChange={handleInputChange}
              placeholder="Ad Soyad"
                className={`w-full pl-12 pr-4 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm
                  border-2 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-500
                  transition-all duration-200 outline-none focus:outline-none
                  ${errors.name
                    ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/20'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20'
                  }`}
              required
              />
              {errors.name && (
                <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Telefon */}
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                type="tel"
                name="phone"
                value={formData.phone}
                  onChange={handleInputChange}
                placeholder="Telefon Numarası"
                  className={`w-full pl-12 pr-4 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm
                    border-2 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-500
                    transition-all duration-200 outline-none focus:outline-none
                    ${errors.phone
                      ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20'
                    }`}
              required
                />
                {errors.phone && (
                  <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </div>
                )}
              </div>
              
              {/* E-posta */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                type="email"
                name="email"
                value={formData.email}
                  onChange={handleInputChange}
                placeholder="E-posta Adresi"
                  className={`w-full pl-12 pr-4 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm
                    border-2 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-500
                    transition-all duration-200 outline-none focus:outline-none
                    ${errors.email
                      ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20'
                    }`}
              required
                />
                {errors.email && (
                  <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Hizmet Bilgileri */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Hizmet Detayları
            </h3>
            
            {/* Hizmet Seçimi */}
              <div className="relative">
              <Settings className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <select
              name="service"
              value={formData.service}
                  onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm
                  border-2 border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-gray-100
                  transition-all duration-200 outline-none focus:outline-none appearance-none cursor-pointer
                  hover:border-gray-300 dark:hover:border-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                required
              >
                {SERVICE_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
                </select>
              </div>

            {/* Mesaj */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 pointer-events-none" />
              <textarea
              name="message"
              value={formData.message}
                onChange={handleInputChange}
              placeholder="Nasıl yardımcı olabiliriz? Detaylı olarak açıklayın..."
              rows={5}
                className={`w-full pl-12 pr-4 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm
                  border-2 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-500
                  transition-all duration-200 outline-none focus:outline-none resize-none
                  ${errors.message
                    ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/20'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20'
                  }`}
              required
              />
              {errors.message && (
                <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.message}
                </div>
              )}
              <div className="mt-2 text-right">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {formData.message.length} karakter
                </span>
              </div>
            </div>
          </div>

          {/* Gönder Butonu */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {status === 'loading' ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Gönderiliyor...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Mesajı Gönder
              </>
            )}
          </button>
        </div>
        </form>

      {/* Alt Bilgi */}
      <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
        <p>
          Mesajınızı göndererek{' '}
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            gizlilik politikamızı
          </span>{' '}
          kabul etmiş olursunuz.
        </p>
      </div>
    </div>
  )
}

export default ContactForm