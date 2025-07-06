import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin, Twitter, MessageSquare, ChevronDown, MoveRight, Navigation, Sparkles, Zap, Shield, Globe, Star, Award, Users, Building } from 'lucide-react'
import ContactForm from '@/components/ui/ContactForm'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { regions } from '@/data/company'
import ServiceAreaChecker from '@/components/ui/ServiceAreaChecker'

const ContactSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
      return () => section.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const faqs = [
    {
      question: 'Hizmet bölgeleriniz nerelerdir?',
      answer: 'Başta Edremit ve çevresi olmak üzere, Balıkesir ve komşu illerde de profesyonel site yönetimi hizmetleri sunmaktayız. Detaylı bilgi için bizimle iletişime geçebilirsiniz.',
      icon: Globe
    },
    {
      question: 'Aidat ödemelerimi nasıl takip edebilirim?',
      answer: 'Apsiyon yönetim sistemimiz ve online aidat takip sistemimiz sayesinde ödemelerinizi kolayca takip edebilir, geçmiş ve gelecek ödemelerinizi görüntüleyebilirsiniz.',
      icon: Shield
    },
    {
      question: 'Şikayet veya arıza durumunda ne yapmalıyım?',
      answer: 'Tüm şikayet ve arıza bildirimlerinizi 7/24 WhatsApp hattımızdan veya web sitemizdeki iletişim formumuzdan iletebilirsiniz. Teknik ekibimiz en kısa sürede sizinle iletişime geçecektir.',
      icon: Zap
    },
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '0530 555 60 07',
      link: 'tel:+905305556007',
      description: '7/24 WhatsApp desteği',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      darkBgColor: 'from-blue-900/20 to-cyan-900/20'
    },
    {
      icon: Mail,
      title: 'E-posta',
      value: 'gurelyonetim@gmail.com',
      link: 'mailto:gurelyonetim@gmail.com',
      description: '24 saat içinde yanıt garantisi',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50',
      darkBgColor: 'from-emerald-900/20 to-teal-900/20'
    },
    {
      icon: MapPin,
      title: 'Adres',
      value: 'Soğanyemez, 513. Sk. No:6/19, 10300 Edremit/Balıkesir',
      link: 'https://www.google.com/maps/dir//G%C3%BCrel+Apartman+ve+Site+Y%C3%B6netimi',
      description: 'Merkez ofisimizi ziyaret edin',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      darkBgColor: 'from-purple-900/20 to-pink-900/20'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      value: 'Pzt-Cum: 09:00-18:00, Cmt: 09:00-13:00',
      link: '#',
      description: 'Pazar günü kapalıyız',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50',
      darkBgColor: 'from-amber-900/20 to-orange-900/20'
    }
  ]

  const stats = [
    { icon: Users, value: '500+', label: 'Mutlu Müşteri', color: 'text-blue-500' },
    { icon: Building, value: '50+', label: 'Yönetilen Site', color: 'text-emerald-500' },
    { icon: Award, value: '10+', label: 'Yıllık Deneyim', color: 'text-purple-500' },
    { icon: Star, value: '4.9', label: 'Müşteri Memnuniyeti', color: 'text-amber-500' }
  ]

  const services = [
    {
      icon: Shield,
      title: 'Apsiyon Yönetim Sistemi',
      description: 'Tüm süreçler parmaklarınızın ucunda',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Online Aidat Takibi',
      description: 'Ödemelerinizi kolayca yönetin',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Globe,
      title: 'Dijital Raporlama',
      description: 'Şeffaf ve detaylı analizler',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: '7/24 WhatsApp Destek',
      description: 'Anında destek hattı',
      color: 'from-amber-500 to-orange-500'
    }
  ]

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen py-20 overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,119,198,0.3),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(120,219,255,0.2),_transparent_50%)]" />
      </div>

      {/* Interactive Mouse Follower */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">İLETİŞİM</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ backgroundSize: '200% 200%' }}
          >
            Bizimle Bağlantı Kurun
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Profesyonel site yönetimi hizmetleri için uzman ekibimiz her zaman hazır. 
            Size özel çözümler sunmak için sabırsızlanıyoruz.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {stats.map((stat, index) => (
            <motion.div
                key={index}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">İletişim Yolları</h3>
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block group"
                whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`relative p-6 bg-gradient-to-br ${method.darkBgColor} backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all overflow-hidden`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1">{method.title}</h4>
                      <p className="text-gray-300 mb-2 break-words">{method.value}</p>
                      <p className="text-sm text-gray-400">{method.description}</p>
                  </div>
                    <MoveRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-xl font-bold text-white mb-4">Sosyal Medya</h4>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
                  { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                  { icon: MessageSquare, href: 'https://wa.me/905305556007', color: 'hover:text-green-400' },
                  { icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
                  { icon: Twitter, href: '#', color: 'hover:text-sky-400' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white/80 ${social.color} transition-all border border-white/10 hover:border-white/30`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
                  </div>
                </div>

          {/* Contact Form */}
                  <div>
            <ContactForm />
                  </div>
                </div>

        {/* Services Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-8">Dijital Avantajlarımız</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2 text-center">{service.title}</h4>
                <p className="text-gray-300 text-center">{service.description}</p>
            </motion.div>
            ))}
          </div>
          </motion.div>

        {/* Interactive Map */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-bold text-center text-white mb-8">Merkez Ofisimiz</h3>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.5429183382953!2d27.01689447544059!3d39.59245070539585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b097e9eb4be623%3A0xd991ced6e038799e!2zR8O8cmVsIEFwYXJ0bWFuIHZlIFNpdGUgWcO2bmV0aW1pIC8gR8O8cmVsIE3DvGxrIFnDtm5ldGltaQ!5e0!3m2!1str!2sus!4v1732455657201!5m2!1str!2sus" 
              width="100%" 
              height="450" 
              className="w-full h-[450px]" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
            <motion.a
              href="https://www.google.com/maps/place/G%C3%BCrel+Apartman+ve+Site+Y%C3%B6netimi"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-900 py-3 px-6 rounded-2xl shadow-lg hover:bg-white transition-all flex items-center gap-2 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Navigation className="w-5 h-5" />
              Google Haritalarda Görüntüle
            </motion.a>
          </div>
        </motion.div>

        {/* Service Area Checker */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-8">Hizmet Bölgelerimiz</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <MapPin className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <span className="text-white font-medium">{region}</span>
              </motion.div>
            ))}
          </div>
          <ServiceAreaChecker />
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-bold text-center text-white mb-12">Sıkça Sorulan Sorular</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-center gap-4 hover:bg-white/5 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <faq.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white">{faq.question}</h4>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-white/60" />
                  </motion.div>
                </motion.button>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: expandedFAQ === index ? 'auto' : 0,
                    opacity: expandedFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pl-22">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">Hemen Başlayalım</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Size özel çözümlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact-form"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5" />
              Ücretsiz Teklif Alın
            </motion.a>
            <motion.a
              href="tel:+905305556007"
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl transition-all flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Hemen Arayın
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ContactSection
