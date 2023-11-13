<template lang="pug">
.footer
  .footer__left-side
    img.left-side__img(src="@/assets/img/Logo.png")
    p.left-side__text Cтатьи о дизайне и искусстве, которые исследуют 
      | творческие вдохновения и актуальные тенденции,
      | раскрывая мир эстетики и креативности
  .footer__right-side
    p.right-side__text email
    a.right-side__email(href="mailto:testblogsupport@gmail.com") testblogsupport@gmail.com
    .right-side__links
      .link(v-for="icon in icons" :key="icon.id")
        img(:src="`/links/${icon.icon}`")
</template>

<script>
export default {
  name: 'FooterTB',
  setup() {
    const icons = ref([
      {
        icon: 'facebook.svg',
        id: 1
      },
      {
        icon: 'instagram.svg',
        id: 2
      },
      {
        icon: 'telegram.svg',
        id: 3
      },
      {
        icon: 'vk.svg',
        id: 4
      },
    ])
    return {
      icons
    }
  }
}
</script>

<style lang="scss">
.footer {
  display: grid;
  grid-template-columns: 426px auto;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 70px;
  &__left-side {
    .left-side__text {
      margin-top: 20px;
      font-family: 'Montserrat-Regular';
      font-size: 14px;
      line-height: 20px;
      color: #8D959C;
    }
  }
  &__right-side {
    margin-right: 78px;
    .right-side__text {
      font-family: 'Montserrat-Regular';
      font-size: 14px;
      line-height: 20px;
      color: #8D959C;
    }
    .right-side__links {
      display: flex;
      .link {
        margin-right: 20px;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
    .right-side__email {
      font-family: 'Montserrat-Regular';
      font-size: 18px;
      line-height: 22px;
      color: #1B1B1B;
    }
    .right-side__links {
      margin-top: 24px;
    }
  }
  @media (max-width: 1024px) {
    display: block;
    padding: 10px;
    margin-top: 25px;
    margin-bottom: 30px;
  }
}
</style>