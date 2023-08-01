import Modal from "../../../../components/Modal/Modal";
import NewGameButton from "../NewGameButton/NewGameButton";
import Score from "../Score/Score";
import SingleCard from "../SingleCard/SingleCard";
import "./styles.scss";

const GameBoardView = ({
  hits,
  misses,
  shuffleCards,
  cards,
  choiseOne,
  choiseTwo,
  handleChoice,
  disabled,
  showModal,
  error,
  handleCloseModal,
}) => {
  return (
    <>
      <Modal showModal={showModal} handleCloseModal={handleCloseModal} />
      {error && <p className="text-danger">{error}</p>}
      <div className="game-board-container d-flex flex-column">
        <div className="w-100 d-flex justify-content-between align-items-center">
          <Score hits={hits} misses={misses} />
          <NewGameButton shuffleCards={shuffleCards} />
        </div>

        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-7 ">
          {cards.map((card) => (
            <div
              key={card.id}
              className="col mb-4 d-flex justify-content-center"
            >
              {
                <SingleCard
                  card={card}
                  handleChoice={handleChoice}
                  flipped={
                    card === choiseOne || card === choiseTwo || card.matched
                  }
                  disabled={disabled}
                />
              }
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GameBoardView;
