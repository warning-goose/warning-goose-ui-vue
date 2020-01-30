<template>
  <div id="app">
    <transition 
       name="fade" 
       mode="out-in"
       @beforeLeave="beforeLeave"
       @enter="enter"
       @afterEnter="afterEnter"
       >
       <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import EventBus from '@/eventbus'

export default {
  name: 'App',
  data: () => ({
    selectedTopics: [],
    prevHeight: 0
  }),
  mounted () {
    EventBus.$on("wg-topics-selector-update", (selectedTopics) => {
      // console.log("received " + payload)
      this.selectedTopics = selectedTopics
    });
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
}
</script>

<style lang="scss">
@import "./styles/config";
@import "./styles/ext/bootstrap-grid";
@import "./styles/ext/bootstrap-reboot";

.fade-enter-active, .fade-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}
.fade-enter, .fade-leave, .fade-enter-to, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

html {
  overflow-x: hidden;
  overflow-y: visible;

  body {
    color: #716e6e;
    font-size: 16px;
    font-family: $font_sans_serif;
    width: 450px;
    width: 600px;
    min-width: 450px;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px;

    h1, h2, h3, h4, h5, h6 {
      font-family: $font_serif;
      color: $color_red;
    }

    h2 {
      font-size: 24px;
      margin-bottom: 35px;
      line-height: 1.3;
    }

    a {
      text-decoration: none;
      transition: all 0.3s;

      &:hover,
      &:focus {
        outline: none;
        text-decoration: none;
      }
    }

    ul, li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    img {
      max-width:100%;
      height: auto;
    }


  } // body
}

body {
  /* nothing */
}

@media screen and (max-width: 320px) {
  html {
    body {
      width: min-content;

      h2 {
        font-size: 36px;
      }

      p {
        line-height: 35px;
        font-size: 22px;
      }

    }
  }
}
</style>
