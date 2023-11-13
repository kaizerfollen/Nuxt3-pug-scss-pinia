<template lang="pug">
div
  HeaderTB
  slot
  FooterTB
  SubscribeTB
</template>

<script>
import HeaderTB from '@/components/HeaderTB.vue'
import FooterTB from '@/components/FooterTB.vue'
import SubscribeTB from '@/components/UI/SubscribeTB.vue'

export default {
  name: 'Default',
  components: {
    HeaderTB,
    FooterTB,
    SubscribeTB
  }
}
</script>
