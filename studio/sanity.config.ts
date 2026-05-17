import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'viewora-marketing',

  projectId: 'hjkhtvs2',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  vite: (config) => {
    return {
      ...config,
      optimizeDeps: {
        ...config.optimizeDeps,
        include: ['framer-motion'],
      },
    }
  },
})
