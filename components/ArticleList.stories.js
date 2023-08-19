import ArticleList from '~/components/ArticleList.vue'

export default {
  title: 'ArticleList',
  components: { ArticleList },
  argTypes: {
    articles: { control: 'object' },
  },
}

const Template = (args) => ({
  components: { ArticleList },
  setup() {
    return { args }
  },
  template: '<ArticleList v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  articles: [
    {
      id: 'article-id-1',
      title: 'article-title-1',
      content: 'article-content-1',
    },
    {
      id: 'article-id-2',
      title: 'article-title-2',
      content: 'article-content-2',
    },
    {
      id: 'article-id-3',
      title: 'article-title-3',
      content: 'article-content-3',
    },
  ],
}
