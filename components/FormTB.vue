<template lang="pug">
.form-section
  img.form-section__img(src="@/assets/img/Img3.png")
  .form-section__form
    h2.form-section__title Стань участником проекта
    .form-section__inputs
      InputTB(:placeholder="'Имя'" :type="'text'")
      InputTB(:placeholder="'Телефон'" :type="'phone'")
      InputTB(:placeholder="'Email'" :type="'email'")
    ButtonPrimaryTB(:name="'Присоединиться'")
</template>

<script>
import InputTB from '@/components/UI/InputTB.vue'
import ButtonPrimaryTB from '@/components/UI/ButtonPrimaryTB.vue'

export default {
  name: 'FormTB',
  components: {
    InputTB,
    ButtonPrimaryTB
  }
}
</script>

<style lang="scss">
.form-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 60px;
  padding: 60px;
  background-color: #1B1B1B;
  order: 1;
  &__img {
    width: 100%;
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__title {
    font-size: 34px;
    line-height: 48px;
    color: #fff;
    font-family: 'Montserrat-ExtraBold';
  }

  @media (max-width: 1024px) {
    display: block;
    padding: 25px;
  }
}
</style>
