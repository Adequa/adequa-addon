<template>
  <div>
    <header>
      <h2>MES COOKIES</h2>
    </header>
    <hr />
    <main>
      <cookie-purpose
        v-for="purpose of Object.values($store.state.purposeList)"
        :key="purpose.id"
        :purpose="purpose"
        :cookies="cookies"
        :domains="domains"
        @cookie-deleted="updateCookies"
      ></cookie-purpose>
    </main>
  </div>
</template>

<script>
import CookiePurpose from './components/CookiePurpose';
import Events from '../../../../../addon-events';

export default {
  name: 'Cookies',
  components: { CookiePurpose },
  methods: {
    onClick(purposeId) {
      // Adequa.API.runtime.sendMessage({ what: 'deleteCookiesByPurpose', purpose: purposeId });
      // this.cookies[purposeId] = [];
    },
    updateCookies() {
      browser.runtime.sendMessage({ type: Events.types.GET_COOKIES }, {}, cookies => {
        this.cookies = cookies;
      });
      // Adequa.API.runtime.sendMessage({ what: 'getCookiesByPurpose' }, cookies => {
      //   this.cookies = cookies;
      // });
      // Adequa.API.runtime.sendMessage({ what: 'getCookieDomainsByPurpose' }, domains => {
      //   this.domains = domains;
      // });
    },
  },
  data() {
    return {
      cookies: {},
      domains: {},
    };
  },
  mounted() {
    console.log('mounted');
    browser.runtime.sendMessage({ type: Events.types.GET_COOKIES }, {}, cookies => {
      this.cookies = cookies;
    });
  },
  created() {
    console.log('created');
    browser.runtime.sendMessage({ type: Events.types.GET_COOKIES }, {}, cookies => {
      this.cookies = cookies;
    });
    this.updateCookies();
  },
};
</script>

<style scoped lang="scss">
div {
  flex: 1;
}
h2 {
  font-family: 'Josefin Sans', sans-serif;
  padding-top: 4px;
  margin-top: -47px;
  margin-bottom: 40px;
  text-align: center;
  font-size: 25px;
  color: black;
}

main {
  max-height: 325px;
  height: 325px;
  overflow-y: overlay;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  padding-right: 16px;
}

.link {
  color: grey;
  cursor: pointer;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
