<template>
  <div class="wg-page-offensive">
    <wg-header 
      :title="$t('offensive.header.title')"
      :subtitle="$t('offensive.header.subtitle')"/>

    <wg-options-selector 
      mode="radio" 
      i18n-prefix="offensive.selector"
      shuffle
      @update="updateAction" 
      :options="offensive" 
      />
    <wg-footer 
      action="next" 
      @update="goToNextPage" 
      :enabled="enableAction"
      :title="$t('offensive.footer.action')"
      />
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
  },
  methods: {
    goToNextPage() {
      this.$router.push('human')
    }
  }
}
</script>

<style scoped>
</style>


