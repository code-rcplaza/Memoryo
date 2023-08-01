import Header from "../../components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";

const GameView = ({ cardImages, loading, error }) => (
  <>
    <Header />
    <div className="container">
      <GameBoard cardsImages={cardImages} loading={loading} error={error} />
    </div>
  </>
);

export default GameView;
