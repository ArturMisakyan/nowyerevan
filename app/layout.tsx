import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Custom Outdoor Promo Booths & Expo Stands | NOW',
  description: 'Stand out with custom-designed outdoor promo booths, ad kiosks, and expo displays. Built for visibility, impact, and brand success.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
