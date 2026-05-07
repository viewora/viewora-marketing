export default defineEventHandler((event) => {
  const host = getRequestHeader(event, 'host')
  if (host && host.startsWith('www.')) {
    return sendRedirect(event, `https://${host.slice(4)}${event.path}`, 301)
  }
})
