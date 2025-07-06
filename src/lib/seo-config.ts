import { DefaultSeoProps } from 'next-seo'

export const seoConfig: DefaultSeoProps = {
  titleTemplate: '%s | Gürel Yönetim',
  defaultTitle: 'Gürel Yönetim - Profesyonel Site ve Apartman Yönetimi',
  description: 'Balıkesir Edremit bölgesinde 15+ yıl deneyimle profesyonel site ve apartman yönetimi hizmetleri. Modern teknoloji, şeffaf yönetim, 7/24 destek.',
  canonical: 'https://gurelyonetim.com',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://gurelyonetim.com',
    siteName: 'Gürel Yönetim',
    images: [
      {
        url: 'https://gurelyonetim.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gürel Yönetim - Profesyonel Site Yönetimi',
      },
    ],
  },
  twitter: {
    handle: '@gurelyonetim',
    site: '@gurelyonetim',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'google-site-verification',
      content: 'google-site-verification=1234567890',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/logo-sy-svg.svg',
    },
    {
      rel: 'apple-touch-icon',
      href: '/logo-sy-svg.svg',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/logo-sy-svg.svg',
    },
  ],
}