Adequa.process.interests.createOffers = function (offers) {
  for (const offer of offers) {
    Adequa.model.offer.save({
      title: offer.title,
      image: offer.image,
      text: offer.text,
      link: offer.link,
      price: offer.price ? offer.price + "€" : null,
      generated_at: Date.now(),
      category: offer.category,
      nb_impressions: 0
    });
  }
};
