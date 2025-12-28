export const blogPosts = [
  {
    id: '1',
    title: 'Getting Started with My Personal Website',
    date: '2024-01-15',
    excerpt: 'Welcome to my new website! Here I share my thoughts, experiences, and learnings from my journey in tech.',
    content: `
# Getting Started with My Personal Website

Welcome to my new website! I'm excited to have this space to share my thoughts, experiences, and learnings.

## Why I Built This

Creating a personal website has been on my todo list for a while. I wanted a place where I could:

- Share my professional journey and experiences
- Write about topics I'm passionate about
- Document my learnings and growth
- Connect with others in the industry

## What to Expect

I'll be writing about various topics related to technology, career development, and personal growth. Some areas I'm particularly interested in include:

- Software development best practices
- Career advice and lessons learned
- Technical deep-dives
- Book reviews and recommendations

Thank you for visiting, and I hope you find something valuable here!
    `.trim(),
    tags: ['personal', 'introduction']
  },
  {
    id: '2',
    title: 'Lessons from Building Scalable Systems',
    date: '2024-02-01',
    excerpt: 'Key insights and lessons learned from designing and building systems that scale to millions of users.',
    content: `
# Lessons from Building Scalable Systems

Over the years, I've had the opportunity to work on systems that serve millions of users. Here are some key lessons I've learned along the way.

## Start Simple

One of the biggest mistakes I see is over-engineering from the start. Your first version doesn't need to handle a million users. Focus on:

- Solving the core problem well
- Building something maintainable
- Getting feedback quickly

## Measure Everything

You can't optimize what you don't measure. Implement comprehensive monitoring and logging from day one:

- Performance metrics
- Error rates
- User behavior analytics
- System health indicators

## Plan for Failure

Everything will fail eventually. Design your system with failure in mind:

- Implement proper error handling
- Use circuit breakers
- Have fallback mechanisms
- Practice incident response

## Conclusion

Building scalable systems is as much about mindset as it is about technology. Stay pragmatic, measure your decisions, and never stop learning.
    `.trim(),
    tags: ['engineering', 'scalability', 'best-practices']
  },
  {
    id: '3',
    title: 'The Power of Continuous Learning',
    date: '2024-03-10',
    excerpt: 'Why continuous learning is essential in tech and strategies that have worked for me over the years.',
    content: `
# The Power of Continuous Learning

The tech industry moves fast. What's cutting-edge today might be obsolete tomorrow. Here's how I approach continuous learning.

## Make It a Habit

Learning shouldn't be sporadic. I've found success with:

- Dedicating time each week to learning
- Following industry leaders and publications
- Participating in online communities
- Working on side projects

## Learn by Doing

Reading and watching tutorials is great, but nothing beats hands-on experience:

- Build projects that interest you
- Contribute to open source
- Experiment with new technologies
- Share what you learn

## Stay Curious

The best developers I know are deeply curious. They ask questions, dig deeper, and never accept "that's just how it works" as an answer.

## Resources I Love

Some resources that have been invaluable:

- Technical blogs and documentation
- Conference talks and podcasts
- Online courses and tutorials
- Books (both technical and non-technical)

Keep learning, stay curious, and don't be afraid to venture outside your comfort zone!
    `.trim(),
    tags: ['career', 'learning', 'growth']
  }
]

export function getPostById(id) {
  return blogPosts.find(post => post.id === id)
}

export function getAllPosts() {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))
}
