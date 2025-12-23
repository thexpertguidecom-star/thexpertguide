export default function sitemap() {
  return [
    {
      url: 'https://thexpertguide.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://thexpertguide.vercel.app/blog/mechanical-keyboard-switch-worth-it',
      lastModified: '2024-12-20',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://thexpertguide.vercel.app/blog/tailwind-css-learning-experience',
      lastModified: '2024-12-15',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://thexpertguide.vercel.app/blog/first-app-deployment-vercel',
      lastModified: '2024-12-10',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
