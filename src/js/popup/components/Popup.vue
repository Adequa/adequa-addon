<template>
  <div id="popup">
    <div id="container">
      <a href="#" @click="closePopup" class="close-menu">
        <font-awesome-icon icon="times"></font-awesome-icon>
      </a>

      <transition :name="transition" class="transition" mode="out-in">
        <router-view :nb-cookies="cookies.length" :show-dev-features="showDevFeatures" :key="$route.fullPath"></router-view>
      </transition>
      <a v-if="$route.path !== '/'" @click="$router.go(-1)" class="open-menu">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
      </a>
    </div>
    <hr />
    <footer>
      <div @click="openSite">
        <img src="img/adequa.svg" height="20" width="20" alt="Adequa Logo">
        <span>Adequa Beta</span>
      </div>
      <font-awesome-icon :icon="['far', 'question-circle']" title="Aide" @click="openHelp" alt="aide bouton"></font-awesome-icon>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  data() {
    return {
      transition: 'slide-right',
      cookies: [],
      showDevFeatures: false,
    };
  },
  methods: {
    openSite() {
      browser.runtime.sendMessage({ what: 'openTab', url: 'https://adequa.me/' });
    },
    openHelp() {
      browser.runtime.sendMessage({ what: 'openTab', url: 'https://adequa.me/help' });
    },
    closePopup() {
      window.close();
    },
  },
  watch: {
    $route(to, from) {
      if (from.path === '/') {
        this.transition = 'slide-left';
      } else {
        if (to.path === '/') {
          this.transition = 'slide-right';
        } else {
          this.transition = to.path === '/menu' ? 'slide-right' : 'slide-left';
        }
      }
    },
  },
  async created() {
    this.showDevFeatures = await browser.runtime.sendMessage({ what: 'openPopup' });
    this.cookies = (await browser.runtime.sendMessage({ what: 'getCookies' })) || [];
    setInterval(async () => {
      this.cookies = (await browser.runtime.sendMessage({ what: 'getCookies' })) || [];
    }, 2000);
  },
};
</script>

<style scoped lang="scss">
.close-menu {
  color: grey;
  transition: color 0.2s ease;
  position: absolute;
  top: 27px;
  right: 30px;
  z-index: 10;
}

.close-menu:hover {
  color: black;
}

/*.menu-slide-enter,*/
.slide-right-leave-to {
  transform: translateX(-100%);
}

/*.menu-slide-enter-to,*/
.slide-right-leave {
  transform: translateX(0%);
}

/*.menu-slide-enter-active,*/
.slide-right-leave-active {
  transition: transform 0.2s linear;
}

.slide-left-enter {
  transform: translateX(-100%);
}

.slide-left-enter-to {
  transform: translateX(0%);
}

.slide-left-enter-active {
  transition: transform 0.2s linear;
}

#popup {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  .body-container {
    height: 509px;
    width: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    top: 0;
    left: 0;

    padding: 30px 30px 0 30px;
  }

  #container {
    height: 509px;
    width: 600px;
  }
}

.open-menu {
  position: absolute;
  top: 24px;
  left: 28px;
  z-index: 99999;
  cursor: pointer;
  color: grey;

  img {
    transform: rotate(0);
    transition: 0.3s ease-in-out;
  }

  img:hover {
    transform: rotate(90deg);
  }
}

hr {
  width: 540px;
  margin: 10px 0 0 30px;
}

footer {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 30px;

  div {
    height: 20px;
    width: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  span {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 14px;
    height: 12px;
  }

  > svg {
    position: absolute;
    bottom: 30px;
    right: 30px;
    cursor: pointer;
    color: grey;
    transition: color 0.2s ease;
  }
  > svg:hover {
    color: black;
  }
}
</style>
