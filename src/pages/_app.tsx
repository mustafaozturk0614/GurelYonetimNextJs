import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { seoConfig } from '@/lib/seo-config'
import '@/styles/globals.css'
import '@/styles/header.css'
import '@/styles/hero.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <div className="font-sans">
        <Component {...pageProps} />
      </div>
    </>
  )
}