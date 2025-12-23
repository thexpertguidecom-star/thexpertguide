// app/page.js
import './globals.css'
import Link from 'next/link'

const blogs = [
  { 
    id: 1,
    slug: "mechanical-keyboard-switch-worth-it",
    title: "I Finally Switched to a Mechanical Keyboard After 10 Years", 
    excerpt: "My membrane keyboard died during a client call. Two weeks with a mechanical keyboard later, here's what actually changed.",
    date: "2024-12-20",
    author: "Mark Stevens",
    readTime: "5 min read"
  },
  { 
    id: 2,
    slug: "tailwind-css-learning-experience",
    title: "Three Months of Tailwind CSS: What Nobody Tells You", 
    excerpt: "Everyone said it would speed things up. Week one was chaos. Week twelve? I can't imagine going back to regular CSS.",
    date: "2024-12-15",
    author: "Sarah Chen",
    readTime: "6 min read"
  },
  { 
    id: 3,
    slug: "first-app-deployment-vercel",
    title: "Deploying My First Real App: A Developer's Honest Story", 
    excerpt: "Six months of tutorials. Zero deployed projects. Then I forced myself to ship something. Here's exactly what happened.",
    date: "2024-12-10",
    author: "Jake Morrison",
    readTime: "7 min read"
  },
]

export const metadata = {
  title: 'TheExpertGuide - Real Developer Stories & Tech Tutorials',
  description: 'Honest tech experiences, coding tutorials, and developer stories. No fluff - just real experiences from people who actually build things.',
  keywords: 'web development, programming tutorials, developer blog, tech stories, coding tips, Next.js, React, Tailwind CSS',
  openGraph: {
    title: 'TheExpertGuide - Real Developer Stories',
    description: 'Honest tech experiences and tutorials from real developers.',
    url: 'https://thexpertguide.vercel.app',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheExpertGuide - Real Developer Stories',
    description: 'Honest tech experiences and tutorials.',
  }
}

export default function Home() {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 py-12 max-w-6xl">
            {/* Hero Section */}
            <div className="hero text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
                Real Stories from Real Developers
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                No AI-generated nonsense. No recycled advice. Just honest experiences from people actually building things.
              </p>
            </div>
            
            {/* Blog Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map(blog => (
                <article key={blog.id} className="card group">
                  <Link href={`/blog/${blog.slug}`} className="block h-full">
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 p-8">
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4 leading-tight">
                        {blog.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      <div className="meta flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                        <span className="date">{new Date(blog.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                        <span className="author">by {blog.author}</span>
                        <span className="read-time">{blog.readTime}</span>
                      </div>
                      <div className="btn inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group-hover:translate-x-1 transition-all duration-200">
                        Read Full Story →
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </section>
          </div>

          {/* Structured Data for SEO */}
          <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Blog",
                "name": "TheExpertGuide",
                "description": "Real developer stories and tech tutorials",
                "url": "https://thexpertguide.vercel.app",
                "blogPost": blogs.map(blog => ({
                  "@type": "BlogPosting",
                  "headline": blog.title,
                  "description": blog.excerpt,
                  "datePublished": blog.date,
                  "author": {
                    "@type": "Person",
                    "name": blog.author
                  },
                  "url": `https://thexpertguide.vercel.app/blog/${blog.slug}`
                }))
              })
            }} 
          />
        </div>
      </body>
    </html>
  )
}
