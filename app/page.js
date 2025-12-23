import './globals.css'

const blogs = [
  { 
    id: 1, 
    title: "Why I Switched to Mechanical Keyboards", 
    excerpt: "After 10 years of regular keyboards, here's what changed.", 
    date: "Dec 20, 2024" 
  },
  { 
    id: 2, 
    title: "Learning Tailwind CSS: The Real Story", 
    excerpt: "Three months in, here's what actually matters.", 
    date: "Dec 15, 2024" 
  },
  { 
    id: 3, 
    title: "My First App Deployment Journey", 
    excerpt: "From localhost to production in 10 minutes.", 
    date: "Dec 10, 2024" 
  },
]

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to TheExpertGuide</h1>
        <p>Expert tips, guides, and real experiences from tech professionals</p>
      </div>
      <div className="grid">
        {blogs.map(blog => (
          <div key={blog.id} className="card">
            <h2>{blog.title}</h2>
            <p>{blog.excerpt}</p>
            <div className="date">{blog.date}</div>
            <a href="#" className="btn">Read More</a>
          </div>
        ))}
      </div>
    </div>
  )
}
