Adequa.process.tabs.notify = function (title, text, link = false, image = "/img/adequa.svg", other_info = false, timeout = false) {
  const notification = {title, text, link, timeout, other_info};
  fetch(image)
    .then(res => res.blob())
    .then(function (blob) {
      const fr = new FileReader();
      fr.onload = function () {
        notification.image = {
          mimeType: blob.type,
          binary: fr.result
        };

        Adequa.API.tabs.query({
          active: true
        }, (tabs) => {
          const tab = tabs[0] || {};

          Adequa.process.tabs.emit(tab, {what: "notify", notification});
        });
      };
      fr.readAsBinaryString(blob);
    })
    .catch(e => {
      fetch("/img/adequa.svg")
        .then(res => res.blob())
        .then(function (blob) {
          const fr = new FileReader();
          fr.onload = function () {
            notification.image = {
              mimeType: blob.type,
              binary: fr.result
            };

            Adequa.API.tabs.query({
              active: true
            }, (tabs) => {
              const tab = tabs[0] || {};

              Adequa.process.tabs.emit(tab, {what: "notify", notification});
            });
          };
          fr.readAsBinaryString(blob);
        })
        .catch(e => {
          console.warn(e);
        });
    });
};
