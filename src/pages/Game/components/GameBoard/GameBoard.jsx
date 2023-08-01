import { useEffect, useState } from "react";
import useModal from "../../../../hooks/useModal";
import { getRandomCards } from "../../../../utils/utilsCards";
import GameBoardView from "./view";

const GameBoard = ({ cardsImages }) => {
  const quantityCards = 6;
  const [cards, setCards] = useState([]);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [choiseOne, setChoiseOne] = useState(null);
  const [choiseTwo, setChoiseTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const { showModal, handleOpenModal, handleCloseModal } = useModal();

  const shuffleCards = () => {
    const randomCards = getRandomCards(cardsImages, quantityCards);
    const shuffledCards = [...randomCards, ...randomCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
      }));
    setHits(0);
    setMisses(0);
    setCards(shuffledCards);
  };

  const handleChoice = (card) => {
    choiseOne === null ? setChoiseOne(card) : setChoiseTwo(card);
  };

  useEffect(() => {
    if (choiseOne && choiseTwo) {
      setDisabled(true);
      if (choiseOne.title && choiseTwo.title) {
        if (choiseOne.title !== choiseTwo.title) {
          setTimeout(() => {
            wrongPair();
          }, 800);
        } else {
          hitsPair();
          setChoiseOne(null);
          setChoiseTwo(null);
        }
      }
    }
  }, [choiseOne, choiseTwo]);

  const wrongPair = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
    setMisses((prevMisses) => prevMisses + 1);
    setDisabled(false);
  };

  const hitsPair = () => {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.title === choiseOne.title) {
          return { ...card, matched: true };
        } else {
          return card;
        }
      });
    });
    setHits((prevHits) => prevHits + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, [cardsImages]);

  useEffect(() => {
    if (hits === quantityCards) {
      handleOpenModal();
      shuffleCards();
    }
  }, [hits, cards]);

  const props = {
    cards,
    hits,
    misses,
    choiseOne,
    choiseTwo,
    disabled,
    handleChoice,
    shuffleCards,
    showModal,
    handleOpenModal,
    handleCloseModal,
  };

  return <GameBoardView {...props} />;
};
export default GameBoard;
