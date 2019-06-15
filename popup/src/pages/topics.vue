<template>
  <div class="wg-page-topics">
    <wg-header 
       :title="$t('topics.header.title')"
       :subtitle="$t('topics.header.subtitle')"/>
    <wg-options-selector 
       mode="radio" 
       i18n-prefix="topics.selector"
       @update="updateAction" 
       :options="topics" />
    <wg-footer 
       action="next" 
       :enabled="enableAction"
       :title="$t('topics.footer.action')"
       />
  </div>
</template>

<script>
import WgHeader from '@/components/header.vue'
import WgFooter from '@/components/footer.vue'
import WgOptionsSelector from '@/components/options_selector.vue'

export default {
  name: 'wg-page-topics',
  props: {
    msg: String
  },
  data: () => ({
    enableAction: false,
    topics: [
      "topic_access",
      "topic_purpose_usage",
      "topic_transfer_thirdparty",
      "topic_transfer_use",
      "topic_privacy_contact",
      "topic_too_many_data",
      "topic_too_complicated",
      "topic_protection",
      "topic_tracking_option",
      "topic_all_or_nothing",
      "topic_retention_time",
      "topic_discrimination_fear",
      "topic_discrimination_information",
      "topic_consent_purpose",
      "topic_consent_by_force",
    ]

  }),
  methods: {
    updateAction(selectedTopics) {
      this.enableAction = (selectedTopics.length > 0)
    }
  },
  components: {
    WgHeader,
    WgFooter,
    WgOptionsSelector
  }
}
</script>

<style lang="scss" scoped>

</style>

