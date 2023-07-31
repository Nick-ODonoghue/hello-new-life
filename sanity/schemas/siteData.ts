export default {
  name: 'siteData',
  title: 'Site Data',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'The title of the site',
    },
    {
      name: 'siteAuthor',
      title: 'Site Author',
      type: 'string',
      description: 'The author of the site',
    },
    {
      name: 'authorBioEn',
      title: 'Author Bio English',
      type: 'array',
      description: 'The bio of the author in English',
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
    {
      name: 'authorBioHu',
      title: 'Author Bio Hungarian',
      type: 'array',
      description: 'The bio of the author in Hungarian',
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

    {
      name: 'authorNickname',
      title: 'Author Nickname',
      type: 'string',
      description: 'The nickname of the author',
    },
    {
      name: 'siteMetaDataDescription',
      title: 'Site Meta Data Description',
      type: 'text',
      description: 'The meta data description of the site',
    },
  ],
}
