import { getServices } from '../services/services'

export default async function sitemap() {
  const baseUrl = 'https://zastrahovkazapatuvane.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/za-nas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/obsthi-usloviya`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  // Dynamic service pages
  let servicePages = []
  try {
    const services = await getServices()
    if (services && services.length > 0) {
      servicePages = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(service.date),
        changeFrequency: 'weekly',
        priority: 0.8,
      }))
    }
  } catch (error) {
    console.error('Error fetching services for sitemap:', error)
  }

  // Dynamic blog pages
  let blogPages = []
  try {
    // Fetch blog posts from WordPress API
    const response = await fetch(
      'https://zastrahovkazapatuvane.admin-panels.com/wp-json/wp/v2/posts?_fields=slug,date&per_page=100',
      { 
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )
    
    if (response.ok) {
      const posts = await response.json()
      blogPages = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly',
        priority: 0.6,
      }))
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  return [...staticPages, ...servicePages, ...blogPages]
} 