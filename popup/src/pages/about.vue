<template>
  <div class="wg-page-about">
    <wg-header 
       :title="$t('about.header.title')"
       :subtitle="$t('about.header.subtitle')"/>

      {{ $t('about.content') }}

    <wg-footer 
       :title="$t('about.footer.action')"
       @update="backToStatement"
       />
  </div>
</template>

<script>
import WgHeader from '@/components/header.vue'
import WgFooter from '@/components/footer.vue'

export default {
  name: 'wg-page-topics',
  props: {
    msg: String
  },
  data: () => ({
  }),
  methods: {
    backToStatement() {
      this.$router.back()
    }
  },
  components: {
    WgHeader,
    WgFooter,
  }
}
</script>

<style lang="scss" scoped>

</style>

