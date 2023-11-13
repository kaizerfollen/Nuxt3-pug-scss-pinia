<template lang="pug">
.wrap
  MainArticlesTB(
    :data="list"
    :isTitle="false"
  )
</template>
<script setup>
import { useInfoStore } from '@/store/index'
import MainArticlesTB from '@/components/MainPage/MainArticlesTB.vue'
const infoStore = useInfoStore()
onMounted(async () => {
  await infoStore.getArticles()
})
const list = computed(() => {
  return infoStore.listArticles[0]?.data
})
</script>
