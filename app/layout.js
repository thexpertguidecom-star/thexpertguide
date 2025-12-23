import './globals.css'

export const metadata = {
  metadataBase: new URL('https://thexpertguide.vercel.app'),
  title: {
    default: 'TheExpertGuide - Real Developer Stories & Tech Tutorials',
    template: '%s | TheExpertGuide'
  },
  description: 'Honest tech experiences, coding tutorials, and developer stories. Learn from real experiences, not AI-generated content.',
  keywords: ['web development', 'programming', 'coding tutorials', 'developer blog', 'tech stories', 'Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'TheExpertGuide Team' }],
  creator: 'TheExpertGuide',
  publisher: 'TheExpertGuide',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thexpertguide.vercel.app',
    title: 'TheExpertGuide - Real Developer Stories',
    description: 'Honest tech experiences and tutorials from real developers.',
    siteName: 'TheExpertGuide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheExpertGuide',
    description: 'Real developer stories and tech tutorials.',
    creator: '@thexpertguide',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://thexpertguide.vercel.app" />
      </head>
      <body>
        <nav>
          <div className="nav-content">
            <a href="/" className="logo">TheExpertGuide</a>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
        <footer>
          <div className="footer-content">
            <p>© 2024 TheExpertGuide. Real stories from real developers.</p>
            <div className="footer-links">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
