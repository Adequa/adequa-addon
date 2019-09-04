<template>
  <div v-if="!showDevFeatures" id="interests-nodev">
    Bientôt vous pourrez choisir ici vos envies
  </div>
  <div id="interests" v-else class="body-container">
    <header>
      <h2>MES ENVIES</h2>
    </header>
    <hr>
    <main>
      <div class="interest-group">
        <interest-setting v-for="interest of interests" :interest="interest" :key="interest.name" @interest-change="interestChange"></interest-setting>
      </div>
      <div>
        <!--<span @click="showOffers">Montre moi les offres</span>-->
      </div>
    </main>
  </div>
</template>

<script>
import InterestSetting from './InterestSetting';

export default {
  name: 'Interests',
  props: ['show-dev-features'],
  components: { InterestSetting },
  data() {
    return {
      interests: [],
    };
  },
  methods: {
    async interestChange(interest) {
      await browser.runtime.sendMessage({ what: 'setInterest', interest });
      this.interests = await browser.runtime.sendMessage({ what: 'getInterests' });
    },
  },
  async created() {
    this.interests = await browser.runtime.sendMessage({ what: 'getInterests' });
  },
};
</script>

<style scoped>
#interests-nodev {
  margin-top: -40px;
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 509px;
}
#interests {
  flex: 1;
}

.interest-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  max-height: 325px;
  height: 325px;
  overflow-y: auto;
}

h2 {
  font-family: 'Josefin Sans', sans-serif;
  height: 20px;
  text-align: center;
  font-size: 25px;
  color: black;
}

h3 {
  font-family: 'Josefin Sans', sans-serif;
  margin-bottom: 5px;
}

hr {
  margin: 30px 0 20px 0;
}

main {
  max-height: 408px;
  padding-bottom: 10px;
  height: 408px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 16px;
}

main > div:first-child {
  height: 300px;
  max-height: 300px;
}
main > div:last-child {
  height: 25px;
  max-height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: grey;
    font-weight: 300;
    font-family: 'Josefin Sans', sans-serif;
    cursor: pointer;
  }
}
</style>
