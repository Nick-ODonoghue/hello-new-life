export default {
  name: 'postHU',
  title: 'PostHU',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of new post',
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'string',
      description: 'Add a breif overview of what the new post is about',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        '*ONLY once you have entered a title above, click the generate button **If you change the title after clicking the generate button, please click generate again',
      options: {
        source: 'title',
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'createdAt',
      title: 'Post Created Date',
      type: 'date',
      description: 'Select the date you wish to be shown as the publication date for this post',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      description: 'Add you posts content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    },
  ],
}
