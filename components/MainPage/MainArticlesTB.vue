<template lang="pug">
.articles-section
  h2.articles-section__title(v-if="isTitle") {{ data.title }}
  .articles-section__articles
    ArticlesTB(
      v-for="(item, idx) in data.articles"
      :key="idx"
      :article="item"
    )
</template>

<script setup>
import { defineProps } from 'vue'
import ArticlesTB from '@/components/UI/ArticlesTB.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  },
  isTitle: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="scss">
.articles-section {
  &__title {
    margin-bottom: 50px;
    font-family: 'Montserrat-ExtraBold';
    font-size: 34px;
    line-height: 46px;
  }
  &__articles {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
