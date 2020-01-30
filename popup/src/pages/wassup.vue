<template>
  <div class="wg-page-wassups">
    <wg-header 
      :title="$t('wassups.header.title')"
      :subtitle="$t('wassups.header.subtitle')"/>
    <wg-options-selector 
      mode="radio" 
      i18n-prefix="wassups.selector"
      shuffle
      @update="updateAction" 
      :options="wassups" 
      />
    <wg-footer 
      action="next" 
      @update="goToNextPage" 
      :enabled="enableAction"
      :title="$t('wassups.footer.action')"
      />
  </div>
</template>

<script>
import WgHeader from '@/components/header.vue'
import WgFooter from '@/components/footer.vue'
import WgOptionsSelector from '@/components/options_selector.vue'

export default {
  name: 'wg-page-wassup',
  props: {
    msg: String
  },
  data: () => ({
    enableAction: false,
    wassups: [
      "i_am_wondering",
      "i_am_forced_to",
      "i_am_angry",
      "i_am_worried_about",
    ]
  }),
  methods: {
    updateAction(selectedTopics) {
      this.enableAction = (selectedTopics.length > 0)
    },
    goToNextPage() {
      this.$router.push('offensive')
    }
  },
  components: {
    WgHeader,
    WgFooter,
    WgOptionsSelector
  }
}

</script>

<style scoped>
</style>



