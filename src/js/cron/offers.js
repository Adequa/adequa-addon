Adequa.sync.pollOffers = function () {
  Adequa.model.interest.getAll().then(interests => {
    const activeInterests = interests.filter(interest => interest.status === "active");

    for (const interest of activeInterests) {
      for (const source of Adequa.storage.offersSources) {
        if (source.categories.indexOf(interest.category) !== -1) {
          if (source.name === "Leboncoin") {
            Adequa.process.requests.leboncoin(interest.parameters, (offers) => {
              offers = offers.map(offer => {
                return {
                  title: offer.subject,
                  image: offer.images.thumb_url,
                  text: offer.body.substring(0, 40) + '...',
                  link: offer.url,
                  price: offer.price ? offer.price[0] : 0,
                  category: interest.category,
                  source: source.name
                }
              });
              Adequa.process.interests.createOffers(offers)
            });
          } else {
            fetch(source.url, {
              method: source.method,
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                category: interest.category,
                ...interest.parameters
              })
            }).then(res => res.json())
              .then(offers => {
                offers.map(offer => {
                  return {...offer, source: source.name}
                });
                Adequa.process.interests.createOffers(offers)
              })
              .catch(console.warn);
          }
        }
      }
    }
  });
};

Adequa.sync.showOffers = function () {
  Adequa.model.offer.getAllSorted().then(offers => {
    for (let i = 0; i < 5 && i < offers.length; i++) {
      const offer = offers[i];
      Adequa.process.tabs.notify(offer.title, offer.text, offer.link, offer.image, offer.price);
      Adequa.model.offer.update(offer);
      Adequa.model.impression.save({
        offer_id: offer._id,
        type: "notification"
      })
    }
  })
};
