export const blogPosts = [
  {
    id: '1',
    title: 'Test',
    date: '2024-12-31',
    excerpt: 'Test',
    content: 'Test',
    tags: []
  }
]

export function getPostById(id) {
  return blogPosts.find(post => post.id === id)
}

export function getAllPosts() {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))
}
