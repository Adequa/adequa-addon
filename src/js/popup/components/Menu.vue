<template>
  <div class="body-container" id="menu-container">
    <nav>
      <router-link to="/cookies">
        <hover-button :text="'MES ' + nbCookies + ' COOKIES'"></hover-button>
      </router-link>
      <router-link to="/choices">
        <hover-button text="MES CHOIX"></hover-button>
      </router-link>
      <router-link to="/interests">
        <hover-button text="MES ENVIES"></hover-button>
      </router-link>
    </nav>
  </div>
</template>

<script>
import HoverButton from './HoverButton.vue';

export default {
  name: 'Menu',
  components: { HoverButton },
  methods: {
    showMenu() {
      return window.history.length > 1;
    },
  },
  props: ['nb-cookies'],
};
</script>

<style scoped lang="scss">
#menu-container {
  background-color: white;
  z-index: 1;
}

.whitelisted {
  color: var(--green) !important;
  cursor: auto !important;
}
.whitelisted:hover {
  text-shadow: none !important;
}

span {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  color: var(--red);
  cursor: pointer;
  transition: all 0.2s;
}
span:hover {
  /*font-weight: 400;*/
  text-shadow: -0.2px -0.2px 0 var(--red), 0.2px -0.2px 0 var(--red), -0.2px 0.2px 0 var(--red), 0.2px 0.2px 0 var(--red);
  transition: all 0.2s;
}
// div {
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 65px;
//   padding-top: 55px;
//   z-index: 9999999;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: white;
// }
nav {
  margin: 40px 0 50px;
  padding-bottom: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  a {
    color: grey;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    font-weight: bold;
  }
}
</style>
