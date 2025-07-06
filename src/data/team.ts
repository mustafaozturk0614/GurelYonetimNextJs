interface TeamMember {
  id: number;
  name: string;
  position: string;
  duties: string[];
  contact?: {
    whatsapp?: string;
    email?: string;
  };
  image?: string; // Varsayılan avatar kullanacağız
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Nevin Aydın",
    position: "Ön Muhasebe Personeli",
    duties: [
      "Özlük Dosyalarının Yönetimi",
      "Fatura ve İrsaliye Kesimi, Takibi",
      "Ödeme ve Tahsilat Takibi",
      "Kiralama ve Kontrat Süreçlerinin Takibi"
    ],
    contact: {
      whatsapp: "0507 535 39 09"
    }
  },
  {
    id: 2,
    name: "Ceyda Azman",
    position: "Müdür Yardımcısı",
    duties: [
      "Veri Giriş Takibi",
      "Kalite Yönetim Sistemi Takibi",
      "Şikayet ve Arıza Takibi",
      "Teknik Personel Planlaması",
      "Taşeron Sözleşme Yönetimi"
    ],
    contact: {
      whatsapp: "0552 455 86 43"
    }
  },
  {
    id: 3,
    name: "Selahattin Ulaca",
    position: "Saha Personeli",
    duties: [
      "Bahçıvan",
      "Havuz Görevlisi",
      "Saha Personeli"
    ]
  }
]; 