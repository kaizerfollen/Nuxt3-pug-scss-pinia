<template lang="pug">
.wrapper
  section(v-for="block in filteredData" :key="block.id")
    component(
      :is="getComponentName(block.type)"
      :data="block.data"
    ) 
</template>
  
<script>
import { useInfoStore } from '@/store/index'
import { TYPE_BLOCK } from '@/composables/useConsts'

import MainSliderTB from '@/components/UI/MainSliderTB.vue'
import SubscribeTB from '@/components/UI/SubscribeTB.vue'
import Articles from '@/components/UI/ArticlesTB.vue'
import FormTB from '@/components/FormTB.vue'
import MainTB from '@/components/MainPage/MainTB.vue'
import CenterTB from '@/components/MainPage/CenterTB.vue'
import MainImageTB from '@/components/MainPage/MainImageTB.vue'
import MainArticlesTB from '@/components/MainPage/MainArticlesTB.vue'

export default {
  name: 'MainPage',
  components: {
    MainSliderTB,
    SubscribeTB,
    Articles,
    FormTB,
    MainTB,
    CenterTB,
    MainImageTB,
    MainArticlesTB
  },
  setup() {
    const { params } = useRoute()
    const infoStore = useInfoStore()
    const filteredData = ref([])
    const blockArticles = computed(() => {
      return infoStore.blockArticles
    })
    onMounted(async () => {
      await infoStore.getArticle(params.id)
      filterDataByType()
    })
    const filterDataByType = () => {
      filteredData.value = blockArticles.value.filter(item => TYPE_BLOCK.includes(item.type))
    }
    const getComponentName = (type) => {
      switch (type) {
        case 'article_intro_block':
          return 'MainTB'
        case 'text_block':
          return 'CenterTB'
        case 'image_block':
          return 'MainImageTB'
        case 'slider_block':
          return 'MainSliderTB'
        case 'subscribe_form_block':
          return 'SubscribeTB'
        case 'article_list_block':
          return 'MainArticlesTB'
        case 'cta_form_block':
          return 'FormTB'
      }
    }
    return {
      getComponentName,
      filteredData,
      filterDataByType
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  grid-row-gap: 100px;

  @media (max-width: 1024px) {
    display: block;
    padding: 0 10px;
  }
}
</style>
