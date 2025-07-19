'use client'
import { teamMembers } from '@/data/team'
import { Phone, Mail, ChevronDown, Briefcase, Linkedin, Twitter, Globe, MapPin } from 'lucide-react'
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Animasyon varyantları
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
}

const TeamSection = () => {
  const [expandedMember, setExpandedMember] = useState<number | null>(null)

  // Kart genişletme işleyicisi
  const handleExpand = useCallback((memberId: number) => {
    setExpandedMember(expandedMember === memberId ? null : memberId)
  }, [expandedMember])

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Arkaplan Efektleri */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e0e7ff,transparent)] opacity-40" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'url("/assets/images/pattern-bg.svg")',
        backgroundRepeat: 'repeat',
        opacity: 0.05,
        transform: 'rotate(3deg) scale(1.2)'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Başlık Bölümü */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent mb-6">
            Profesyonel Ekibimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Deneyimli ve uzman kadromuzla size en iyi hizmeti sunmak için buradayız. Her bir ekip üyemiz alanında uzmanlaşmış profesyonellerden oluşmaktadır.
          </p>
        </motion.div>

        {/* Ekip Üyeleri Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <AnimatePresence>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 
                             hover:shadow-2xl border border-gray-100">
                  {/* Profil Başlığı */}
                  <div className="p-8 bg-gradient-to-br from-blue-600 to-blue-700 relative">
                    {/* Dekoratif Elementler */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full 
                                transform translate-x-20 -translate-y-10 backdrop-blur-sm" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-tr-full 
                                transform -translate-x-12 translate-y-12" />

                    {/* Profil Avatar */}
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl bg-white/10 
                                backdrop-blur-md overflow-hidden transform transition-all duration-300 
                                group-hover:rotate-3 group-hover:scale-105">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <span className="absolute inset-0 flex items-center justify-center text-4xl 
                                     text-white font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      )}
                    </div>

                    {/* İsim ve Pozisyon */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-center"
                    >
                      <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                        {member.name}
                      </h3>
                      <div className="flex items-center justify-center space-x-2 text-blue-100">
                        <MapPin size={16} className="opacity-75" />
                        <p className="font-medium">{member.position}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Görevler ve İletişim */}
                  <div className="p-6">
                    <button
                      onClick={() => handleExpand(member.id)}
                      className="w-full flex items-center justify-between text-gray-700 font-medium 
                               p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100
                               hover:border-gray-200"
                    >
                      <span className="flex items-center">
                        <Briefcase size={18} className="mr-3 text-blue-600" />
                        Görev ve Sorumluluklar
                      </span>
                      <motion.div
                        animate={{ rotate: expandedMember === member.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {expandedMember === member.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-3 py-4 px-4">
                            {member.duties.map((duty, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start text-gray-600 group/item"
                              >
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 
                                             group-hover/item:scale-125 transition-transform" />
                                <span className="flex-1">{duty}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* İletişim Bilgileri */}
                    {member.contact && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 pt-6 border-t border-gray-100"
                      >
                        <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
                          <Globe size={16} className="mr-2 text-blue-600" />
                          İletişim Bilgileri
                        </h4>
                        <div className="space-y-3">
                          {member.contact.whatsapp && (
                            <a
                              href={`https://wa.me/${member.contact.whatsapp.replace(/\s+/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-600 hover:text-green-600 
                                     transition-all p-3 rounded-xl hover:bg-green-50 group/whatsapp"
                            >
                              <Phone size={18} className="mr-3 transition-transform 
                                                      group-hover/whatsapp:scale-110" />
                              <span className="flex-1">{member.contact.whatsapp}</span>
                            </a>
                          )}
                          {member.contact.email && (
                            <a
                              href={`mailto:${member.contact.email}`}
                              className="flex items-center text-gray-600 hover:text-blue-600 
                                     transition-all p-3 rounded-xl hover:bg-blue-50 group/mail"
                            >
                              <Mail size={18} className="mr-3 transition-transform 
                                                     group-hover/mail:scale-110" />
                              <span className="flex-1">{member.contact.email}</span>
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* Sosyal Medya Linkleri */}
                    {member.social && (
                      <div className="mt-6 flex justify-center space-x-4">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            <Linkedin size={20} />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                          >
                            <Twitter size={20} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default TeamSection 