import { Metadata } from 'next'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://thexpertguide.vercel.app'),
  title: 'TheExpertGuide - Expert Tips & Guides',
  description: 'Professional guides and expert advice on technology, development, and productivity.',
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <div className="nav-content">
            <a href="/" className="logo">TheExpertGuide</a>
          </div>
        </nav>
        <main>{children}</main>
        <footer>
          © 2025 TheExpertGuide. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
