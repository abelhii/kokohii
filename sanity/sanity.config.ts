import { colorInput } from '@sanity/color-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity',

  projectId: 'myej3dgd',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },
})
