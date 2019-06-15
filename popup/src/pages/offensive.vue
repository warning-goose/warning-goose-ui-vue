<template>
  <div>
    <wg-header title=""
               subtitle="" />
      Offensive
    <wg-footer />
  </div>
</template>

<script>
import WgHeader from '@/components/header.vue'
import WgFooter from '@/components/footer.vue'

export default {
  name: 'wg-page-offensive',
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


