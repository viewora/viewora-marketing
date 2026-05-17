import { defineField, defineType } from 'sanity'

  export default defineType({
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required().max(80),
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title', maxLength: 96 },
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'description',
        title: 'Meta Description',
        type: 'text',
        rows: 3,
        validation: Rule => Rule.required().max(200),
      }),
      defineField({
        name: 'category',
        title: 'Category',
        type: 'string',
        initialValue: 'Guides',
      }),
      defineField({
        name: 'author',
        title: 'Author',
        type: 'string',
        initialValue: 'The Viewora Team',
      }),
      defineField({
        name: 'date',
        title: 'Published Date',
        type: 'date',
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'image',
        title: 'Cover Image',
        type: 'image',
        options: { hotspot: true },
      }),
      defineField({
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [
          { type: 'block' },
          { type: 'image', options: { hotspot: true } },
        ],
      }),
    ],
    preview: {
      select: { title: 'title', subtitle: 'date', media: 'image' },
    },
  })