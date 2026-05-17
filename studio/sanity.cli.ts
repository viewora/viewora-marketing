import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'hjkhtvs2',
    dataset: 'production'
  },
  deployment: {
    appId: 'd46wsm3myp4y9l3ak2ag96dk',
    autoUpdates: true,
  }
})
