import { X, CheckCircle, Phone, Mail } from 'lucide-react'
import { Service } from '@/types'

interface ServiceModalProps {
  service: Service | null
  isOpen: boolean
  onClose: () => void
}

const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  if (!isOpen || !service) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-4">
            <div className="text-blue-600">
              {service.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            {service.description}
          </p>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Hizmet Özellikleri</h3>
            <div className="grid gap-3">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {service.details && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Detaylı Bilgi</h3>
              <div className="space-y-3">
                {service.details.map((detail, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          )}

          {service.pricing && (
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fiyatlandırma</h3>
              <p className="text-gray-700">{service.pricing}</p>
            </div>
          )}

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bu Hizmet İçin İletişime Geçin</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:05305556007"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Hemen Ara
              </a>
              <a
                href="mailto:gurelyonetim@gmail.com"
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceModal