<template>
  <div>
    <div class="purpose">
      <div>
        <div>
          <span class="expand" @click="toggleExpand">+</span>
          <p @click="toggleExpand" class="name">{{ purpose.name }}</p>
        </div>
        <p class="count">{{ ((cookies || {})[purpose.id] || []).length }}</p>
      </div>
      <span class="link" @click="deletePurpose(purpose.id)">
        <font-awesome-icon icon="trash-alt"></font-awesome-icon>
      </span>
    </div>
    <div v-if="expanded" v-for="domain of (domains || {})[purpose.id]" class="domain">
      <div>
        <p @click="openUrl(domain.website)" :class="{ pointer: domain.website }">{{ domain.domain }}</p>
        <p>{{ domain.count }}</p>
      </div>
      <span class="link" @click="deleteDomain(domain.domain, purpose.id)">
        <font-awesome-icon icon="trash-alt"></font-awesome-icon>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookiePurpose',
  props: ['purpose', 'cookies', 'domains'],
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    async deleteDomain(domain, purposeId) {
      if (purposeId === 1) {
        if (!confirm('Attention, supprimer un cookie de fonctionnement peut affecter le fonctionnement du site concerné. Êtes-vous sûr de vouloir poursuivre ?')) {
          return;
        }
      }

      await browser.runtime.sendMessage({ what: 'deleteCookiesByDomain', domain });
      this.$emit('cookie-deleted');
    },
    async deletePurpose(purposeId) {
      await browser.runtime.sendMessage({ what: 'deleteCookiesByPurpose', purpose: purposeId });
      this.$emit('cookie-deleted');
    },
    toggleExpand(e) {
      this.expanded = !this.expanded;
      e.target.parentNode.parentNode.querySelector('.expand').innerText = this.expanded ? '-' : '+';
    },
    openUrl(url) {
      if (!url) return;
      browser.runtime.sendMessage({ what: 'openTab', url });
    },
  },
};
</script>

<style scoped lang="scss">
.purpose {
  width: 480px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Josefin Sans', sans-serif;

  > p {
    height: 14px;
  }

  .name {
    cursor: pointer;
    transition: 0.3s;
    color: gray;
    height: 16px;
  }

  :hover .name,
  :hover .expand {
    color: black;
  }

  .count {
    font-weight: 300;
    color: black;
    width: 50px;
    height: 16px;
  }

  > div {
    width: 375px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      width: 300px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
}

.domain {
  padding: 10px 0 0 30px;
  margin-left: 45px;
  border-left: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Josefin Sans', sans-serif;

  * {
    font-size: 14px !important;
  }

  > div {
    width:259px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p:last-child {
      font-weight: 300;
      width: 10px;
    }
  }
}

.link {
  color: var(--red);
  font-weight: 300;
  font-family: 'Josefin Sans', sans-serif;
  cursor: pointer;
  margin-left: 10px;
}

.expand {
  height: 50px;
  width: 17px;
  text-align: center;
  font-size: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  transition: 0.3s;

  margin-right: 20px;
}

.pointer {
  cursor: pointer;
}
</style>
