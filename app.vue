<template lang="pug">
.app-wrapper
  NuxtLayout
    NuxtPage
</template>

<style lang="scss" scoped>
.app-wrapper {
  width: 1340px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
    overflow: hidden;
  }
}
</style>
