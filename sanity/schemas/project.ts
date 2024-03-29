import {defineType} from 'sanity'
import {CONTENT_POSITIONS, CONTENT_TYPE, IMAGE_ORIENTATION} from '../../shared/types'

export const project = defineType({
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {title: 'Cover Image', name: 'coverImage', type: 'image'},
    {title: 'Title', name: 'title', type: 'string'},
    {title: 'Description', name: 'description', type: 'array', of: [{type: 'block'}]},
    {title: 'Contributions', name: 'contributions', type: 'array', of: [{type: 'string'}]},
    {title: 'Typography', name: 'typography', type: 'image'},
    {title: 'Color Palette', name: 'colorPalette', type: 'image'},
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          title: '',
          type: 'object',
          fields: [
            {title: 'Name', name: 'name', type: 'string'},
            {
              title: 'Type',
              name: 'type',
              type: 'string',
              options: {
                list: [
                  {title: 'Description', value: CONTENT_TYPE.description},
                  {title: 'Image', value: CONTENT_TYPE.image},
                ],
              },
            },
            {
              title: 'Description',
              name: 'description',
              type: 'array',
              of: [{type: 'block'}, {type: 'image'}],
              hidden: ({parent, value}) => !value && parent?.type !== CONTENT_TYPE.description,
            },
            {
              title: 'Image',
              name: 'image',
              type: 'object',
              hidden: ({parent, value}) => !value && parent?.type !== CONTENT_TYPE.image,
              fields: [
                {
                  title: 'Orientation',
                  name: 'orientation',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Portrait', value: IMAGE_ORIENTATION.portrait},
                      {title: 'Landscape', value: IMAGE_ORIENTATION.landscape},
                      {title: 'Full Width', value: IMAGE_ORIENTATION.fullWidth},
                    ],
                  },
                },
                {
                  title: 'Image',
                  name: 'image',
                  type: 'image',
                },
              ],
            },
            {
              title: 'Position',
              name: 'position',
              type: 'string',
              initialValue: 'center',
              options: {
                list: [
                  {title: 'Center', value: CONTENT_POSITIONS.CENTER},
                  {title: 'Left', value: CONTENT_POSITIONS.LEFT},
                  {title: 'Right', value: CONTENT_POSITIONS.RIGHT},
                  {title: 'Full Width', value: CONTENT_POSITIONS.FULL},
                ],
                layout: 'dropdown',
              },
            },
            {
              name: 'gutterColor',
              title: 'Gutter Color',
              type: 'color',
              hidden: ({parent, value}) => !value && parent?.type !== CONTENT_TYPE.image,
            },
            {
              name: 'spaceBetween',
              title: 'Space Between',
              description: 'Should this section have a space between the next section?',
              type: 'boolean',
              initialValue: true
            },
          ],
        },
      ],
    },
  ],
})
