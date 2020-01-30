<template>
  <div class="wg-page-finish">
    <wg-header 
      :title="$t('finish.header.title')"
      :subtitle="$t('finish.header.subtitle')"/>

      HUMAN PROOF

    <wg-footer 
      action="next" 
      @update="goToNextPage" 
      :enabled="enableAction"
      :title="$t('finish.footer.action')"
      />
  </div>
</template>

<script>
import WgHeader from '@/components/header.vue'
import WgFooter from '@/components/footer.vue'

export default {
  name: 'wg-page-finish',
  props: {
    msg: String
  },
  components: {
    WgHeader,
    WgFooter
  },
  methods: {
    goToNextPage() {
      // FIXME: send data
    }
  }
}
</script>

<style scoped>
</style>


