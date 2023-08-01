export const getRandomCards = (cardsImages, numberOfCards) => {
  const shuffledCards = cardsImages.sort(() => Math.random() - 0.5);
  const randomCards = shuffledCards.slice(0, numberOfCards);

  return randomCards;
};
