<template>
  <div class="body-container">
    <header>
      <h2>MES CHOIX</h2>
    </header>
    <hr>
    <div>
      <p>
        Lorsque vous naviguez, des cookies sont déposés sur votre navigateur.
        <br>Vous pouvez accepter ou refuser leur dépôt.
      </p>
      <span>Sur tous les sites (par défaut)</span>
      <main>
        <div class="scrollable-content">
          <settings :website-settings="false"></settings>
        </div>
      </main>
      <span class="link" @click="buttonClicked">Sur ce site <font-awesome-icon icon="arrow-up"></font-awesome-icon></span>
    </div>
  </div>
</template>

<script>
import Settings from './Settings';

export default {
  name: 'Choices',
  components: { Settings },
  methods: {
    async buttonClicked() {
      await browser.runtime.sendMessage({ what: 'openModal' });
      window.close();
    },
  },
};
</script>

<style scoped lang="scss">
h2 {
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  font-size: 25px;
  color: black;
  height: 20px;
}

main {
  max-height: 252px;
  height: 252px;
  margin: 10px 0;
  position: relative;
}

hr {
  margin: 30px 0 20px 0;
}

div {
  font-family: 'Josefin Sans', sans-serif;

  > p {
    text-align: justify;
    font-size: 16px;
    margin-bottom: 15px;
    font-style: italic;
    font-weight: lighter;
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

.scrollable-content {
  overflow: auto;
  background: white;
  width: 100%;
  height: 100%;
  padding: 30px;
  line-height: 1.2;
  padding: 0 30px;
}

main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 30px);
  height: 30px;
  background: linear-gradient(white, transparent); /* transparent keyword is broken in Safari */
  pointer-events: none;
  z-index: 10;
}

main::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 30px);
  height: 30px;
  background: linear-gradient(transparent, white); /* transparent keyword is broken in Safari */
  pointer-events: none;
  z-index: 10;
}

.body-container {
  > div:last-child {
    height: 408px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10px;
  }
}
</style>
