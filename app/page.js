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
  keywords: 'web development, programming tutorials, developer blog, tech stories, coding tips',
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
    <>
      <div className="container">
        <div className="hero">
          <h1>Real Stories from Real Developers</h1>
          <p>No AI-generated nonsense. No recycled advice. Just honest experiences from people actually building things.</p>
        </div>
        
        <section className="grid">
          {blogs.map(blog => (
            <article key={blog.id} className="card">
              <Link href={`/blog/${blog.slug}`}>
                <h2>{blog.title}</h2>
              </Link>
              <p>{blog.excerpt}</p>
              <div className="meta">
                <span className="date">{blog.date}</span>
                <span className="author">by {blog.author}</span>
                <span className="read-time">{blog.readTime}</span>
              </div>
              <Link href={`/blog/${blog.slug}`} className="btn">Read Full Story →</Link>
            </article>
          ))}
        </section>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
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
            }
          }))
        })
      }} />
    </>
  )
}
