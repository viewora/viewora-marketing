import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'hjkhtvs2',
  dataset: 'production',
  apiVersion: '2026-05-17',
  useCdn: true,
})
