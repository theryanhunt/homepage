import frontMatter from 'front-matter'

const postModules = import.meta.glob('/src/content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
})

const posts = Object.entries(postModules).map(([path, content]) => {
  const slug = path.split('/').pop().replace('.md', '')
  const { attributes, body } = frontMatter(content)

  return {
    id: attributes.id || slug,
    title: attributes.title || slug,
    date: attributes.date,
    excerpt: attributes.excerpt || '',
    tags: Array.isArray(attributes.tags) ? attributes.tags : [],
    content: body.trim()
  }
})

export const blogPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))

export function getPostById(id) {
  return blogPosts.find(post => post.id === id)
}

export function getAllPosts() {
  return blogPosts
}
