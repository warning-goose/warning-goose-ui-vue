<template>
  <div class="wg-footer">
    <div class="form-group">
      <input v-if="action === 'next'" 
             type="button" 
             :value="title" 
             :disabled="!enabled" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'wg-footer',
  props: {
    title: {
      type: String,
    },
    action: {
      type: String,
    },
    enabled: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>

@import "../styles/config";

.wg-footer {
  margin-top: 20px;

  .form-group {
    input[type=submit],
    input[type=button] {
      background-color: $color_red;
      padding: 10px 20px;
      border: none;
      color: white;
      flex-grow: 1;
      margin-top: 40px;

      &[disabled] {
        background-color: $color_red_disabled;
        color: $color_lightgrey;
      }
    }
  }
}
</style>



