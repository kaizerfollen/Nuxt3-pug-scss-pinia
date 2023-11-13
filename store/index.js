import { defineStore } from 'pinia'
const baseUrl = import.meta.env.VITE_BASE_URL

export const useInfoStore = defineStore({
  id: 'filter-store',
  state: () => ({
    articles: [],
    article: [],
    meta: {}
  }),
  actions: {
    async getArticle(id) {
      try {
        const { body, meta } = await $fetch(`${baseUrl}/page/?path=/article-${id}`)
        this.$patch({ article: body, meta })
      } catch(error) {
        console.log(error, 'error');
      }
    },
    async getArticles() {
      try {
        const { body } = await $fetch(`${baseUrl}/page/?path=/`)
        this.$patch({ articles: body })
      } catch (error) {
        console.log(error, 'error');
      }
    }
  },
  getters: {
    blockArticles: state => state.article,
    listArticles: state => state.articles
  },
})
