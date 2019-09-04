<template>
  <div class="body-container">
    <header>
      <h2>MES COOKIES</h2>
    </header>
    <hr>
    <main>
      <div class="scrollable-content">
        <cookie-purpose
          v-for="purpose of purposes"
          :key="purpose.id"
          :purpose="purpose"
          :cookies="cookies"
          :domains="domains"
          @cookie-deleted="updateCookies"
        ></cookie-purpose>
      </div>
    </main>
    <button @click="downloadCookies" id="download">
      <font-awesome-icon icon="download" alt="télécharger"></font-awesome-icon>Télécharger
    </button>
  </div>
</template>

<script>
import CookiePurpose from './CookiePurpose';

export default {
  name: 'Cookies',
  components: { CookiePurpose },
  methods: {
    onClick(purposeId) {
      browser.runtime.sendMessage({ what: 'deleteCookiesByPurpose', purpose: purposeId });
      this.cookies[purposeId] = [];
    },
    async updateCookies() {
      this.cookies = (await browser.runtime.sendMessage({ what: 'getCookiesByPurpose' })) || {};
      this.domains = (await browser.runtime.sendMessage({ what: 'getCookieDomainsByPurpose' })) || {};
      console.log(this.cookies[1]);
    },
    downloadCookies() {
      const categories = ['domain', 'expirationDate', 'hostOnly', 'httpOnly', 'name', 'path', 'sameSite', 'secure', 'session', 'storeId', 'value', 'active'];
      let csv = `"sep=;"\n
        ${categories.join(';')};type\n`; // Separator and columns titles

      for (let i = 1; i <= 4; i++) {
        if (this.cookies[i]) {
          this.cookies[i].forEach(entry => {
            categories.forEach(category => {
              csv += `${entry[category]};`;
            });
            csv += `${i}\n`;
          });
        }
      }

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'cookies.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
  },
  data() {
    return {
      purposes: [],
      cookies: {},
      domains: {},
    };
  },
  async created() {
    this.purposes = await browser.runtime.sendMessage({ what: 'getCookiePurposes' });

    this.updateCookies();
  },
};
</script>

<style scoped lang="scss">
button {
  text-decoration: none;
  padding: 10px;
  color: gray;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;
  background: white;
}

button:hover {
  color: black;
}

h2 {
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  font-size: 25px;
  color: black;
  height: 20px;
}

main {
  max-height: 357px;
  height: 357px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
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

hr {
  margin-bottom: 0;
  margin-top: 30px;
}

.scrollable-content {
  overflow: auto;
  background: white;
  width: 100%;
  height: 100%;
  padding: 15px;
  line-height: 1.2;
  padding: 0 30px;

  > div:last-child {
    padding-bottom: 20px;
  }
}
</style>
