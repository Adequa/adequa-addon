<template>
  <div>
    <header>
      <h2>MES CHOIX</h2>
    </header>
    <hr />
    <div>
      <p>
        Lorsque vous naviguez, des cookies sont déposés sur votre navigateur. Pour certains d'entre eux, votre consentement est nécessaire. Cliquez sur chaque catégorie de cookies
        pour accepter ou refuser leur utilisation.
      </p>
      <span>
        Sur tous les sites (par défaut)
      </span>
      <main>
        <purpose-setting v-for="purpose of Object.values($store.state.purposeList || {})" :key="purpose.id" :purpose="purpose"></purpose-setting>
      </main>
      <span class="link" @click="buttonClicked">Sur ce site</span>
    </div>
  </div>
</template>

<script>
import PurposeSetting from './components/PurposeSetting.vue';
import * as Emit from '../../../../../../src/popup/event-emitter';

export default {
  name: 'Settings',
  components: { PurposeSetting },
  methods: {
    buttonClicked() {
      Emit.openModal();
    },
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
  text-align: center;
  font-size: 25px;
  color: black;
}

main {
  max-height: 220px;
  height: 220px;
  overflow-y: auto;
  margin: 10px 0;
}

div {
  font-family: 'Josefin Sans', sans-serif;

  > p {
    text-align: justify;
    font-family: 'Josefin Slab', serif;
    font-size: 16px;
    margin-bottom: 15px;
  }
}

.link {
  color: grey;
  cursor: pointer;
  font-weight: 300;
  transition: color 0.2s ease;
}

.link:hover {
  color: black;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
