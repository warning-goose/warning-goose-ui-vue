<template>
  <div>
    <wg-header />
      wassup !
    <wg-footer />
  </div>
</template>

<script>
import WgHeader from '@/components/header.vue'
import WgFooter from '@/components/footer.vue'

export default {
  name: 'wg-page-wassup',
  props: {
    msg: String
  },
  components: {
    WgHeader,
    WgFooter
  }
}
</script>

<style scoped>
</style>



