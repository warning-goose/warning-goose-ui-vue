<template>
  <div class="wg-footer">
    <div class="form-group">
      <input  
         type="button" 
         :value="title" 
         :disabled="!enabled" 
         @click="update"
         />
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
  },
  methods: {
    update() {
      this.$emit('update')
    }
  }
}
</script>

<style lang="scss" scoped>

@import "../styles/config";
@import "../styles/mixins/loader";
@import "../styles/ext/bootstrap-grid";
@import "../styles/ext/bootstrap-reboot";

.wg-footer {

  .form-group {
    input[type=submit],
    input[type=button] {
      background-color: $color_red;
      padding: 10px 20px;
      border: none;
      color: white;
      flex-grow: 1;
      margin-top: 40px;
      margin-bottom: 40px;
      width: 100%;
      border-radius: 5px;
      outline: 0;

      &[disabled] {
        background-color: $color_red_disabled;
        color: $color_lightgrey;
      }
    }
  }
}
</style>



