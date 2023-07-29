import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ModeToggle } from '@/components/ModeToggle'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className='py-8'>
            <nav className='container flex items-center justify-between'>
              <ul className='flex space-x-6'>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/products'>Products</Link>
                </li>
              </ul>
              <ModeToggle />
            </nav>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
