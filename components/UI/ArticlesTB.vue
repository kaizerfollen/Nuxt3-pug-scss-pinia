<template lang="pug">
.articles
  img.articles__img(:src="article.image", :alt="article.image")
  h3.articles__title {{ article.title }}
  NuxtLink(:to="formatArticleLink(article.link)")
    ButtonBlackTB.articles__btn(:name="'Читать'" :background="'#1B1B1B'")
</template>

<script setup>
import { defineProps } from 'vue'
import ButtonBlackTB from '@/components/UI/ButtonBlackTB.vue'

const props = defineProps({
  article: {
    type: Object,
    default: () => ({})
  }
})
const formatArticleLink = (link) => {
  const parts = link.split('-')
  return `${parts[0]}/${parts[1]}`
}
</script>

<style lang="scss">
.articles {
  width: 427px;
  order: 1;
  &__img {
    width: 100%;
    height: 320px
  }
  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 30px;
  }
  &__title {
    margin-top: 20px;
    font-family: 'Montserrat-ExtraBold';
    font-size: 22px;
    line-height: 30px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 60px;
  }
  &__btn {
    margin-top: 30px;
  }
}
</style>
