import type { Metadata } from 'next'
import { Raleway, Nunito } from 'next/font/google'
import './globals.css'

const geistSans = Nunito({
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
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  )
}
