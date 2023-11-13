<template lang="pug">
.main-section
  .main-section__left-side
    img.left-side__img(:src="data.image" alt="Image-1")
  .main-section__right-side
    h1.right-side__title {{ data.title }}
    .right-side__info
      .info__description
        img.info__icon(src="@/assets/img/time.svg" alt="Icon-Time")
        p.info__text {{ data.time }} мин времени на прочтение
      .info__description
        img.info__icon(src="@/assets/img/eye.svg" alt="Icon-Eye")
        p.info__text {{ data.views_count }} прочитали статью
    p.right-side__text {{ data.short_description }}
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.main-section {
  display: grid;
  grid-template-columns: 540px 1fr;
  grid-column-gap: 30px;
  order: 0;
  &__left-side {
    width: 540px;
    height: 580px;
    .left-side__img {
      width: 100%;
      height: 100%;
      border-top-right-radius: 50%;
      overflow: hidden;
    }

    @media (max-width: 1024px) {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: auto;
  }
  &__right-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .right-side__title {
      margin-bottom: 30px;
      font-family: 'Montserrat-Bold';
      font-weight: 800;
      font-size: 55px;
      line-height: 66px;

      @media (max-width: 1024px) {
        line-height: 42px;
        font-size: 32px;
      }
    }
    .right-side__info {
      .info__description {
        display: flex;
        margin-bottom: 4px;
      }
      .info__icon {
        margin-right: 8px;
      }
      .info__text {
        font-family: 'Montserrat-Regular';
        line-height: 20px;
        font-size: 14px;
        color: #8D959C;
      }
    }
    .right-side__text {
      margin-top: 50px;
      font-family: 'Montserrat-Regular';
      line-height: 26px;
      font-size: 17px;

      @media (max-width: 1024px) {
        margin-top: 20px;
      }
    }
  }

  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
}
</style>