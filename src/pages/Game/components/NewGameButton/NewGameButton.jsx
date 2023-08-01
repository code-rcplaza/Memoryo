import "./styles.scss";

const NewGameButton = ({ shuffleCards }) => (
  <button
    className="btn btn-primary btn-lg btn-new-game"
    onClick={shuffleCards}
  >
    New Game
  </button>
);

export default NewGameButton;
