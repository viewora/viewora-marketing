/**
 * useBreadcrumb — injects a BreadcrumbList JSON-LD block via useHead.
 *
 * Usage (2-level: Home → Page):
 *   useBreadcrumb('Virtual Tours Nairobi', '/virtual-tours-nairobi')
 *
 * Usage (3-level: Home → Blog → Post):
 *   useBreadcrumb('My Post Title', '/blog/my-post', { name: 'Blog', path: '/blog' })
 */
export function useBreadcrumb(
  pageName: string,
  pagePath: string,
  parent?: { name: string; path: string }
) {
  const baseUrl = 'https://viewora.software'

  const itemListElement: object[] = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
  ]

  if (parent) {
    itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: parent.name,
      item: `${baseUrl}${parent.path}`,
    })
    itemListElement.push({
      '@type': 'ListItem',
      position: 3,
      name: pageName,
      item: `${baseUrl}${pagePath}`,
    })
  } else {
    itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: pageName,
      item: `${baseUrl}${pagePath}`,
    })
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement,
        }),
      },
    ],
  })
}
