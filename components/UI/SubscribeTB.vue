<template lang="pug">
.subscribe-section
  h3.subscribe-section__text Подпишись на рассылку
  InputTB(:type="'email'" :placeholder="'Email'")
  ButtonPrimaryTB(:name="'Подписаться'")
</template>
<script>
import ButtonPrimaryTB from '@/components/UI/ButtonPrimaryTB.vue'
import InputTB from '@/components/UI/InputTB.vue'

export default {
  name: 'SubscribeTB',
  components: {
    ButtonPrimaryTB,
    InputTB
  }
}
</script>

<style lang="scss" scoped>
.subscribe-section {
  display: flex;
  align-items: center;
  padding: 35px 30px;
  background-color: #000;
  order: 1;
  &__text {
    flex: 1;
    color: #fff;
    font-family: 'Montserrat-ExtraBold';
    font-size: 22px;
    line-height: 30px;
  }

  @media (max-width: 1024px) {
    display: block;
  }
}
</style>
