import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Gürel Yönetim",
              "description": "Balıkesir Edremit bölgesinde profesyonel site ve apartman yönetimi hizmetleri",
              "url": "https://gurelyonetim.com",
              "telephone": "+905305556007",
              "email": "gurelyonetim@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Soğanyemez, 513. Sk. No:6/19",
                "addressLocality": "Edremit",
                "addressRegion": "Balıkesir",
                "postalCode": "10300",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "39.5926",
                "longitude": "26.9344"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "$$",
              "servedCuisine": [],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "39.5926",
                  "longitude": "26.9344"
                },
                "geoRadius": "50000"
              },
              "areaServed": [
                "Edremit", "Akçay", "Güre", "Burhaniye", 
                "Küçükkuyu", "Altınoluk", "Pelitköy", "Gömeç", "Ayvalık"
              ],
              "founder": {
                "@type": "Person",
                "name": "Anıl Gürel",
                "jobTitle": "Kurucu ve Yönetici"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}