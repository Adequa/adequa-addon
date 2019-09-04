<template>
  <div id="stats">
    <header>
      <h1>MERCI ADEQUA !</h1>
    </header>
    <main>
      <stat-item v-if="banners !== null" :number="banners.total" title="bandeaux de cookies ÉVITÉS" :subtitle="bannerSubtitle"></stat-item>
      <stat-item v-if="trackers !== null" :number="trackers.total" title="cookies REFUSÉS... soit" :subtitle="trackersSubtitle"></stat-item>
<!--      <stat-item number="395" unit="g" title="DE CO<sub>2</sub> PRODUIT"></stat-item>-->
    </main>
    <footer>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="361.117px" height="361.117px" viewBox="0 0 361.117 361.117">
          <path
            d="M359.568,327.246L191.511,21.818c-2.197-3.993-6.395-6.474-10.952-6.474c-4.558,0-8.754,2.481-10.952,6.474L1.549,327.246
			c-2.131,3.872-2.058,8.582,0.191,12.388c2.249,3.805,6.34,6.139,10.76,6.139h336.117c4.421,0,8.512-2.334,10.761-6.139
			C361.627,335.828,361.699,331.118,359.568,327.246z M33.646,320.772L180.559,53.773l146.913,266.999H33.646z"
          />
          <path
            d="M164.894,143.085v90.351c0,8.65,7.014,15.665,15.665,15.665c8.65,0,15.665-7.015,15.665-15.665v-90.351
			c0-8.651-7.015-15.665-15.665-15.665C171.908,127.42,164.894,134.435,164.894,143.085z"
          />
          <path
            d="M180.559,265.364c-9.097,0-16.5,7.399-16.5,16.5c0,9.098,7.403,16.5,16.5,16.5c9.097,0,16.5-7.402,16.5-16.5
			C197.059,272.764,189.655,265.364,180.559,265.364z"
          />
        </svg>

        <span @click="addToWhitelist" v-if="!website.whitelisted">Désactiver sur {{ website.hostname }}</span>
        <span v-else class="whitelisted" @click="removeFromWhitelist">Réactiver sur {{ website.hostname }} </span>
      </div>

      <div>
        <router-link to="/menu" class="open-menu">
          <font-awesome-icon icon="cog"></font-awesome-icon>
          Mes paramètres
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
import StatItem from './StatItem';

export default {
  name: 'Stats',
  components: { StatItem },
  data() {
    return {
      banners: null,
      trackers: null,
      website: {
        whitelisted: false,
        hostname: 'Ce site',
      },
    };
  },
  methods: {
    async addToWhitelist() {
      this.website = await browser.runtime.sendMessage({ what: 'addToWhitelist' });
    },
    async removeFromWhitelist() {
      this.website = await browser.runtime.sendMessage({ what: 'removeFromWhitelist' });
    },
  },
  async created() {
    this.banners = await browser.runtime.sendMessage({ what: 'getBannerRemoved' });
    this.trackers = await browser.runtime.sendMessage({ what: 'getTrackerCount' });
    const website = await browser.runtime.sendMessage({ what: 'getCurrentWebsite' });
    if (website) this.website = website;
  },
  computed: {
    bannerSubtitle() {
      return (this.banners || {}).website ? 'y compris sur ce site !' : '';
    },
    trackersSubtitle() {
      const cookies = (this.trackers || {}).total || 0;

      const time = Math.floor((38 * cookies) / 60) ? Math.floor((38 * cookies) / 60) : 38 * cookies;
      let result = time;
      let firstUnit = 'pièce';
      if (cookies >= 480000) {
        firstUnit = 'quartier';
        result = Math.floor(time / 480 / 60);
      } else if (cookies >= 480) {
        firstUnit = 'immeuble';
        result = Math.floor(time / 0.48 / 60);
      } else if (cookies >= 60) {
        firstUnit = 'appartement';
        result = Math.floor(time / 0.06 / 60);
      }

      const timeUnit = cookies <= 1 ? 'secondes' : cookies === 2 ? 'minute' : 'minutes';

      return `l'énergie pour éclairer<br> 1 ${firstUnit} pendant ${result} ${timeUnit} !`;
    },
  },
};
</script>

<style scoped lang="scss">
footer svg {
  fill: grey;
  height: 25px;
  width: 25px !important;
  transition: all 0.3s;
}

.whitelisted {
  cursor: auto !important;
}

footer div,
a {
  font-family: 'Josefin Sans', sans-serif;
  color: grey;
  cursor: pointer;
  transition: all 0.3s;
}
footer div:hover,
a:hover,
footer div:hover svg {
  color: black !important;
  transition: all 0.3s;
  fill: black;
}
#stats {
  display: flex;
  flex-direction: column;
  height: 100%;
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;

  h1 {
    padding-bottom: 10px;
    font-family: 'Montserrat', sans-serif;
    display: block;
    transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;
    font-size: 22px;
    width: 240px;
    text-align: center;
    color: grey;
    border-bottom: 3px solid var(--green);
  }
}
main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 20px 0;
}
footer {
  display: flex;
  align-items: center;
  height: 50px;
  margin: 10px 0;
  div {
    &:first-child {
      border-right: 1px solid black;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 100%;
      cursor: pointer;
    }
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: grey;
  }
  .open-menu {
    color: grey;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
  }
}
</style>
