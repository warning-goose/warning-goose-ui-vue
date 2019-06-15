<template>
  <div class="wg-topics-selection">
    <div class="form-group" 
         v-for="item in topics" 
         :key="item">
      <input type="checkbox" 
             name="topics[]" 
             @click="toggleTopic" 
             :id="item" 
             :value="item" 
             />
      <label :for="item" >{{ $t(`topics.selector.${item}`) }}</label>
    </div>
  </div>
</template>

<script>
import EventBus from '@/eventbus'

export default {
  name: 'wg-topics-selector',
  data: () => ({
    selectedTopics: [],
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
  watch: {
    selectedTopics() {
      this.$emit('update', this.selectedTopics)
      // EventBus.$emit('wg-selected-topics', this.selectedTopics);
      // console.log(this.selectedTopics)
    }
  },
  methods: {
    toggleTopic(ev) {
      let value = ev.target.value
      let i = this.selectedTopics.indexOf(value)
      if (i === -1) {
        this.selectedTopics.push(value)
      } else {
        this.selectedTopics.splice(i, 1)
      }
    }
  }
}
</script>

