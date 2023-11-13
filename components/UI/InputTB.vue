<template lang="pug">
input.input(
  v-model="value"
  :type="type"
  :placeholder="placeholder"
  :class="{ 'active': isActive, 'filled': value !== '' }"
  @input="emitInput"
  @focus="isActive = true"
  @blur="isActive = false"
)
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'InputTB',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'Текст'
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const value = ref(props.modelValue || '')
    const isActive = ref(false)

    const emitInput = () => {
      emit('update:modelValue', value.value)
    }

    return {
      value,
      isActive,
      emitInput
    }
  }
};
</script>

<style lang="scss">
.input {
  width: 353px;
  height: 43px;
  margin-right: 37px;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'Montserrat-Regular';
  padding-left: 10px;
  border-bottom: 1px solid #8D959C;
  color: #555;
  font-size: 18px;
  line-height: 26px;
  box-sizing: border-box;
  &::placeholder {
    color: #8D959C;
  }
  &.active {
    border-bottom: 1px solid #3657D3;
    color: #3657D3;
  }
  &.filled {
    border-bottom: 1px solid #fff;
    color: #fff;
  }
  
  @media (max-width: 1024px) {
    width: 100%;
  }
}
</style>
  