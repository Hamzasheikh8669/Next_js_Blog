import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hamza Sheikh Tech Blog',
  description: 'A blog about AI, Full Stack, and Blockchain development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

