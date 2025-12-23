import { articles, getAllSlugs } from '@/lib/articles'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Generate all possible routes
export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

// Generate SEO metadata for each article
export async function generateMetadata({ params }) {
  const article = articles[params.slug]
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | TheExpertGuide`,
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      url: `https://thexpertguide.vercel.app/blog/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
  }
}

export default function BlogPost({ params }) {
  const article = articles[params.slug]

  if (!article) {
    notFound()
  }

  return (
    
      
        {article.title}
        
          by {article.author}
          {article.date}
          {article.readTime}
        
      

      
        {article.content.split('\n\n').map((paragraph, index) => {
          // Handle headings
          if (paragraph.startsWith('## ')) {
            return {paragraph.replace('## ', '')}
          }
          // Handle code blocks
          if (paragraph.startsWith('```')) {
            const code = paragraph.replace(/```[\w]*\n?/g, '')
            return {code}
          }
          // Handle bold text
          if (paragraph.includes('**')) {
            const parts = paragraph.split('**')
            return (
              
                {parts.map((part, i) => 
                  i % 2 === 1 ? {part} : part
                )}
              
            )
          }
          // Regular paragraphs
          return {paragraph}
        })}
      

      
        ← Back to all articles
      

      {/* Structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": article.title,
          "description": article.description,
          "author": {
            "@type": "Person",
            "name": article.author
          },
          "datePublished": article.date,
          "keywords": article.keywords,
        })
      }} />
    
  )
}
