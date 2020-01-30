<template>
  <div class="wg-page-human">
    <wg-header 
      :title="$t('human.header.title')"
      :subtitle="$t('human.header.subtitle')"/>

      HUMAN PROOF

    <wg-footer 
      action="next" 
      @update="goToNextPage" 
      :enabled="enableAction"
      :title="$t('human.footer.action')"
      />
  </div>
</template>

<script>
import WgHeader from '@/components/header.vue'
import WgFooter from '@/components/footer.vue'

export default {
  name: 'wg-page-human',
  props: {
    msg: String
  },
  components: {
    WgHeader,
    WgFooter
  },
  methods: {
    goToNextPage() {
      this.$router.push('finish')
    }
  }
}
</script>

<style scoped>
</style>


