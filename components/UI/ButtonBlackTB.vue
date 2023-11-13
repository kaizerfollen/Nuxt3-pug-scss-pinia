<template lang="pug">
.wrap
  button.btn-black(type="button") {{ name }}
</template>

<script>
export default {
  name: 'ButtonBlackTB',
  props: {
    name: {
      type: String,
      default: 'Кнопка'
    }
  }
}
</script>
<style lang="scss">
.btn-black {
  padding: 10px 50px;
  border: none;
  font-family: 'Montserrat-Regular';
  font-size: 18px;
  line-height: 26px;
  background-color: #1B1B1B;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s; 
  &:hover {
    background-color: #3657D3;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
}
</style>
