<template>
  <div class="wg-options-selector">
    <div class="form-group" 
         v-for="item in indirectOptions" 
         :key="item">

      <input v-if="mode === 'checkbox'" 
             type="checkbox" 
             name="options[]" 
             @click="toggleOption" 
             :id="item" 
             :value="item" 
             />
      <input v-if="mode === 'radio'"
             type="radio" 
             name="options[]" 
             @click="toggleOption" 
             :id="item" 
             :value="item" 
             />

      <label :for="item" >{{ $t(`${i18nPrefix}.${item}`) }}</label>
    </div>
  </div>
</template>

<script>
import EventBus from '@/eventbus'

export default {
  name: 'wg-options-selector',
  props: {
    mode: {
      type: String,
      required: true,
      validator: function (value) {
        // The value must match one of these strings
        return ['checkbox', 'radio'].indexOf(value) !== -1
      }
    },
    i18nPrefix: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    shuffle: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    selectedOptions: [],
  }),
  watch: {
    selectedOptions() {
      this.$emit('update', this.selectedOptions)
      EventBus.$emit('wg-options-selector-update', this.selectedOptions);
      // console.log(this.selectedOptions)
    }
  },
  computed: {
    indirectOptions() {
      if (this.shuffle) return this.shuffledOptions
      return this.options
    },
    shuffledOptions() {
      return this.options.slice(0).sort(() => {
        let ren = Math.random();
        if (ren == 0.5) return 0
        return ren > 0.5 ? 1 : -1
      })
    }
  },
  methods: {
    toggleOption(ev) {
      let value = ev.target.value
      let i = this.selectedOptions.indexOf(value)
      if (i === -1) {
        this.selectedOptions.push(value)
      } else {
        this.selectedOptions.splice(i, 1)
      }
    }
  }
}
</script>

<styles lang="scss" scoped>

@import "../styles/_config.scss";
@import "../styles/mixins/loader.scss";

.wg-options-selector {
  .explanation {
    margin-top: 40px;
    font-style: italic;
    font-size: 14px;

    & + .explanation {
      margin-top: 20px;
    }
  }

  .form-group {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;

    .button-overlay {
      display: none;
      position: absolute;
      width: 100%;
      opacity: 0.5;
      margin-top: 20px;
      text-align: center;

      @include wg-loader;
    }

    input[type=radio],
    input[type=checkbox] {
      display: none;
    }

    input[type=radio] + label,
    input[type=checkbox] + label {
      transition: all 0.25s ease-in-out;
      background-color: lighten($color_blue, 55%);
      padding: 10px 20px;
      border-radius: 5px;
      flex-grow: 1;
    }

    input[type=radio]:checked + label,
    input[type=checkbox]:checked + label {
      background-color: lighten($color_red, 55%);
      padding-left: 25px;
      font-style: italic;
    }

    input[type=text],
    input[type=email] {
      width: 100%;
      padding: 10px 20px;
      box-shadow: inset 0px 2px 2px rgba($color_blue, 0.25);
      border: 1px solid $color_blue;
      border-radius: 5px;
    }

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
  } // form-group
} // main
</styles>
