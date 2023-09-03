import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Star Wars Data',
  description: 'Star Wars Data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
