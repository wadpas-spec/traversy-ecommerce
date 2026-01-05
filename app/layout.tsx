import type { Metadata } from 'next'
import {
  Raleway,
  Nunito,
  Roboto,
  Neuton,
  Open_Sans,
  Inter,
} from 'next/font/google'
import './globals.css'

const gFont = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Simple Store',
  description: 'A simple e-commerce store built with Next.js 13 and TypeScript',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${gFont.className} antialiased`}>{children}</body>
    </html>
  )
}
