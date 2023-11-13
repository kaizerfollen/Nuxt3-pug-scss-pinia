<template lang="pug">
.slider-section
  Swiper(
    :height="550"
    :modules="[SwiperPagination, SwiperNavigation]"
    :navigation="{ 'prevEl': '.prev', 'nextEl': '.next' }"
    :pagination="{ 'type': 'fraction', 'el': '.pagination' }"
    :slides-per-view="1"
  )
    SwiperSlide(v-for="(slide,idx) in data" :key="idx")
      img(:src="slide")
  .prev
    img.arrow(src="@/assets/img/ArrowLeft.svg")
  .next
    img.arrow(src="@/assets/img/ArrowRight.svg")
  .pagination
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
.slider-section {
  position: relative;
  height: 550px;
  width: 1112px;
  margin: 0 auto;
  order: 1;

  @media (max-width: 1024px) {
    margin: 50px 0;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.prev,
.next {
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #000;
  cursor: pointer;
}
.prev {
  left: -90px;
}
.next {
  right: -90px;
}
.pagination {
  position: absolute;
  transform: translateX(-50%);
  bottom: -40px;
  left: 50%;
  width: auto;
  font-family: 'Montserrat-Regular';
  font-size: 18px;
  line-height: 26px;
}
</style>
