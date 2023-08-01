import "./styles.scss";

const Score = ({ hits, misses }) => {
  return (
    <div className="d-flex justify-content-around my-3 score-panel">
      <div className="score mx-3 fs-1">Hits: {hits}</div>
      <div className="score mx-3 fs-1">Misses: {misses}</div>
    </div>
  );
};

export default Score;
