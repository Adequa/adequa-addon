<template>
  <div>
    <purpose-setting
      v-for="purpose of purposes"
      :key="purpose.id"
      :purpose="purpose"
      :allowed="allowed(purpose.id)"
      @valueChanged="valueChanged"
    ></purpose-setting>
  </div>
</template>

<script>
import PurposeSetting from './PurposeSetting';

export default {
  name: 'Settings',
  components: { PurposeSetting },
  data() {
    return {
      websiteId: null,
      defaultConsent: new Set(),
      settings: null,
      purposes: null,
    };
  },
  methods: {
    allowed(purpose) {
      return this.defaultConsent.has(purpose);
    },
    valueChanged({ id, allowed }) {
      if (allowed) {
        this.defaultConsent.add(id);
      } else {
        this.defaultConsent.delete(id);
      }
      this.defaultConsent = new Set([...this.defaultConsent]);
      browser.runtime.sendMessage({ what: 'setConsent', consent: [...this.defaultConsent], changed: id });
    },
  },
  props: ['website-settings'],
  async mounted() {
    this.websiteId = await browser.runtime.sendMessage({ what: 'getWebsiteId' });
    this.purposes = await browser.runtime.sendMessage({ what: 'getPurposeList' });
    this.defaultConsent = new Set(await browser.runtime.sendMessage({ what: 'getDefaultConsent' }));
  },
};
</script>

<style scoped lang="scss">
div {
  > div:last-child {
    margin-bottom: 20px;
  }

  > div:first-child {
    margin-top: 10px;
  }
}
</style>
