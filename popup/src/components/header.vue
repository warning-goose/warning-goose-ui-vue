<template>
  <header class="wg-header">
    <nav class="nav">
      <ul>
        <li><router-link :to="{name: 'about'}" >About</router-link></li>
        <li><router-link :to="{name: 'preferences'}" >Preferences</router-link></li>
      </ul>
    </nav>
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
@import "../styles/mixins/loader";
@import "../styles/ext/bootstrap-grid";
@import "../styles/ext/bootstrap-reboot";
// @import "../styles/fonts";

.wg-header {
  .nav {
    background-color: darken($color_blue, 25%);
    color: darken(white, 25%);
    font-size: 80%;
    margin: 0 -20px;
    padding: 5px 20px;
    text-align: right;

    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      li {
        display: inline;
        margin-right: 1em;

        a {
          color: lighten($color_blue, 25%);
        }
      }
    }
  }

  h2 {
    background-color: $color_blue;
    // background: linear-gradient(135deg, $color_black 0%, $color_blue 15%, $color_blue 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

    color: $color_white;
    display: block;
    font-size: 30px;
    font-style: italic;
    margin: 0px -20px 0px -20px;
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

