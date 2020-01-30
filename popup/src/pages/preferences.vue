<template>
  <div class="wg-page-preferences">
    <wg-header 
       :title="$t('preferences.header.title')"
       :subtitle="$t('preferences.header.subtitle')"/>

      Preferences !

    <wg-footer 
       :title="$t('preferences.footer.action')"
       @update="backToStatement"
       />
  </div>
</template>

<script>
import WgHeader from '@/components/header.vue'
import WgFooter from '@/components/footer.vue'

export default {
  name: 'wg-page-preferences',
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

