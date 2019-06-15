<template>
  <header class="wg-header">
    <h2 v-html="title"></h2>
    <h3 v-html="subtitle"></h3>
  </header>
</template>

<script>
export default {
  name: 'wg-header',
  props: {
    title: {
      type: String,
      default: "Hey, Warning Goose !"
    },
    subtitle: {
      type: String,
      default: "Qu'est-ce qui t'alerte sur <span class='site-url'>SITE</span> concernant l'utilisation de tes informations personnelles&nbsp;?"
    }
  }
}
</script>

<style lang="scss" scoped>
// Configuration (before anything else)
@import "../styles/config";
// @import "../styles/fonts";

.wg-header {
  h2 {
    background-color: $color_blue;
    // background: linear-gradient(135deg, $color_black 0%, $color_blue 15%, $color_blue 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

    color: $color_white;
    display: block;
    font-style: italic;
    margin: -20px -20px 0px -20px;
    padding: 20px 20px;

    .site-url {
      color: $color_red;
    }
  }

  h3 {
    display: block;
    font-size: 18px;
    margin: 0px -20px 0px -20px;
    padding: 20px 20px;
  }

  .site-url {
    font-style: italic;
    color: $color_blue;
  }
}

@media only screen and (min-width: 768px) {
}

</style>

