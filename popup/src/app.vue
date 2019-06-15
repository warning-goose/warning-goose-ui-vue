<template>
  <div id="app">
    New active topics = {{ selectedTopics.join(' ') }}
    <router-view/>
  </div>
</template>

<script>
import EventBus from '@/eventbus'

export default {
  name: 'App',
  data: () => ({
    selectedTopics: []
  }),
  mounted () {
    EventBus.$on("wg-selected-topics", (payload) => {
      // console.log("received " + payload)
      this.selectedTopics = payload
    });
  }
}
</script>

<style lang="scss">
@import "./styles/config";

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
    padding: 16px;

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
