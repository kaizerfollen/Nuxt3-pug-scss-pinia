<template lang="pug">
.image-section
  img.image-section__img(:src="data.src")
  p.image-section__text Опубликовано 20.08.2022,
  p.image-section__text {{ data.caption }}
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss">
.image-section {
  text-align: right;
  order: 0;
  &__img {
    width: 100%;
    margin-bottom: 15px;
    border-top-right-radius: 200px;
    overflow: hidden;
  }
  &__text {
    font-family: 'Montserrat-Regular';
    font-size: 14px;
    line-height: 20px;
    color: #8D959C;
  }

  @media (max-width: 1024px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>
