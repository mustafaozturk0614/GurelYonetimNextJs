import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { services } from '@/data/services'
import ServiceModal from '@/components/ui/ServiceModal'
import { Service } from '@/types'

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false)

  const handleServiceClick = (service: Service) => {
    setSelectedService(service)
    setIsServiceModalOpen(true)
  }

  return (
    <>
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesyonel ekibimiz ve modern teknolojilerimizle 
              size en iyi hizmeti sunmak için buradayız.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                onClick={() => handleServiceClick(service)}
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                  Detayları görüntüle →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal 
        service={selectedService}
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
      />
    </>
  )
}

export default ServicesSection