<template>
  <div class="wg-page-topics">
    <wg-header :title="$t('topics.header.title')"
               :subtitle="$t('topics.header.subtitle')"/>
    <wg-topics-selector @update="updateAction"
       />
    <wg-footer action="next" 
               :enabled="enableAction"
               :title="$t('topics.footer.action')"
               />
  </div>
</template>

<script>
import WgHeader from '@/components/header.vue'
import WgFooter from '@/components/footer.vue'
import WgTopicsSelector from '@/components/topics_selector.vue'

export default {
  name: 'wg-page-topics',
  props: {
    msg: String
  },
  data: () => ({
    enableAction: false
  }),
  methods: {
    updateAction(selectedTopics) {
      this.enableAction = (selectedTopics.length > 0)
    }
  },
  components: {
    WgHeader,
    WgFooter,
    WgTopicsSelector
  }
}
</script>

<style lang="scss" scoped>

</style>

