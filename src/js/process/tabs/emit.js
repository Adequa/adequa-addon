const Emit = {
  async emitAllTabs(message) {
    const tabs = await browser.tabs.query({});
    for (const tab of tabs) {
      Emit.emit(tab, message);
    }
  },
  emit(tab, message) {
    const port = browser.tabs.connect(tab.id);
    port.postMessage(message);
  },
};

export default Emit;
