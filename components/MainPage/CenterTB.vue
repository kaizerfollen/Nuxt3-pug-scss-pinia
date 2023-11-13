<template lang="pug">
.center-section(v-if="!parsedData.paragraphs")
  h3.center-section__title {{ parsedData.title }}
  div.center-section__info
    p.info__text {{ parsedData.text1 }}
    br
    p.info__text {{ parsedData.text2 }}
    div.center-section__quote-wrapper(v-if="parsedData.quoteText")
      img.quote-wrapper__img(src="@/assets/img/quote.svg" alt="Quote")
      div.quote-wrapper__info
        p.info__text {{ parsedData.quoteText }}
        p.info__text-signature {{ parsedData.quoteAuthor }}

.list-section(v-else)
  h3.list-section__title {{ parsedData.title }}
  p.list-section__text {{ parsedData.text1 }}
  ul.list-section__list
    li.list__item(v-for="(item, idx) in parseData.paragraphs" :key="idx") {{ item }}
    li.list__item Дизайн интерьера и архитектурная визуализация
    li.list__item Применение в медицинском моделировании и образовании
  p.list-section__text {{ parsedData.text2 }}
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const parsedData = ref({})

onMounted(() => {
  parseData()
})

const parseData = () => {
  const parser = new DOMParser()
  const parsedDocument = parser.parseFromString(props.data, "text/html")
  const ulElement = parsedDocument.querySelector('ul')
  if (ulElement) {
    parsedData.value.title = parsedDocument.querySelector("h2").textContent;
    parsedData.value.text1 = parsedDocument.querySelectorAll("p")
    if (parsedData.value.text1) {
      parsedData.value.text1 = parsedDocument.querySelectorAll("p")[0].innerHTML
    }
    if (parsedData.value.text2) {
      parsedData.value.text2 = parsedDocument.querySelectorAll("p")[1].innerHTML
    }
    const paragraphs = parsedDocument.querySelectorAll("li");
    parsedData.value.paragraphs = Array.from(paragraphs).map(p => p.textContent);
    return
  }
  if (parsedDocument.querySelector("h2")) {
    parsedData.value.title = parsedDocument.querySelector("h2").textContent
  }
  parsedData.value.text1 = parsedDocument.querySelectorAll("p")[0].innerHTML
  if (parsedDocument.querySelectorAll("p")[1]) {
    parsedData.value.text2 = parsedDocument.querySelectorAll("p")[1].innerHTML
  }
  const quoteElement = parsedDocument.querySelector("blockquote p")
  parsedData.value.quoteText = quoteElement ? quoteElement.innerHTML : '';
  
  const footerElement = parsedDocument.querySelector("footer");
  parsedData.value.quoteAuthor = footerElement
    ? footerElement.textContent.replace(/,/g, ',<br>&nbsp;')
    : '';
}

</script>
<style lang="scss" scoped>
.center-section {
  width: 884px;
  margin: 0 auto;
  order: 0;
  &__title {
    font-size: 34px;
    line-height: 46px;
    font-family: 'Montserrat-ExtraBold';
  }
  &__info {
    margin-top: 50px;
    .info__text {
      font-family: 'Montserrat-Regular';
      font-size: 18px;
      line-height: 26px;
      color: #1B1B1B;
    }

    @media (max-width: 1024px) {
      margin-top: 30px;
    }
  }
  &__quote-wrapper {
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-column-gap: 36px;
    margin-top: 40px;
    .quote-wrapper__info {
      .info__text {
        font-family: 'Montserrat-LightItalic';
        font-size: 18px;
        line-height: 26px;
      }
      .info__text-signature {
        margin-top: 15px;
        font-family: 'Montserrat-Regular';
        font-size: 14px;
        line-height: 26px;
        color: #8D959C;
      }

      @media (max-width: 1024px) {
        margin-top: 20px;
      }
    }
    @media (max-width: 1024px) {
      display: block;
    }
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
}
</style>
