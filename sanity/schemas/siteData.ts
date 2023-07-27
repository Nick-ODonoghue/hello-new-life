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
      name: 'authorBio',
      title: 'Author Bio',
      type: 'text',
      description: 'The bio of the author',
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
