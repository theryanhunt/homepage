export function formatDate(dateString) {
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) {
    return 'Unknown date'
  }
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
