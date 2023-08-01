import backgroundCard from "./../../../../assets/images/background-card.svg";
import "./styles.scss";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    console.log(!disabled);
    if (!disabled) handleChoice(card);
  };

  return (
    <div className="single-card mt-3 col-lg-1 col-md-2 col-sm-3 col-6">
      <div className={flipped ? "flipped" : ""}>
        <img
          className="single-card-image single-card-front"
          src={card.url}
          alt={card.title}
        />
        <img
          className="single-card-image single-card-back"
          src={backgroundCard}
          alt="background-card"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
