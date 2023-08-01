import useCardImages from "./../../hooks/useCardImages";
import GameView from "./view";

const Game = () => {
  const { cardImages, loading, error } = useCardImages();

  const props = {
    cardImages,
    loading,
    error,
  };
  return <GameView {...props} />;
};

export default Game;
