import matter from 'gray-matter'

const postModules = import.meta.glob('/src/content/posts/*.md', {
  as: 'raw',
  eager: true
})

const posts = Object.entries(postModules).map(([path, content]) => {
  const slug = path.split('/').pop().replace('.md', '')
  const { data, content: body } = matter(content)

  return {
    id: data.id || slug,
    title: data.title || slug,
    date: data.date,
    excerpt: data.excerpt || '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    content: body.trim()
  }
})

export const blogPosts = posts

export function getPostById(id) {
  return blogPosts.find(post => post.id === id)
}

export function getAllPosts() {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))
}
