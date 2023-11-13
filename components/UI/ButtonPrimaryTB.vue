<template lang="pug">
.wrap
  button.btn-primary(type="button") {{ name }}
</template>

<script>
export default {
  name: 'ButtonPrimaryTB',
  props: {
    name: {
      type: String,
      default: 'Кнопка'
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-primary {
  padding: 10px 50px;
  border: 1px solid #3657D3;
  font-family: 'Montserrat-Regular';
  font-size: 18px;
  line-height: 26px;
  background-color: #3657D3;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s; 
  &:hover {
    background-color: transparent;
  }

  @media (max-width: 1024px) {
    margin-top: 30px;
    width: 100%;
  }
}
</style>
