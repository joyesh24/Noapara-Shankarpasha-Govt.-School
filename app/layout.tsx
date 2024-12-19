'use client'

import { Noto_Serif_Bengali } from 'next/font/google'
import './globals.css'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const notoSerifBengali = Noto_Serif_Bengali({ 
  subsets: ['bengali'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    NProgress.configure({ 
      showSpinner: false,
      trickleSpeed: 200,
      minimum: 0.3,
      easing: 'ease',
      speed: 500
    })
  }, [])

  useEffect(() => {
    NProgress.start()
    NProgress.done()
  }, [pathname, searchParams])

  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={notoSerifBengali.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}

