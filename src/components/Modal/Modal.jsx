import "./styles.scss";

const Modal = ({ showModal, handleCloseModal }) => {
  const playerName = localStorage.getItem("playerName");

  return (
    <div
      className="modal show fade"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content modal-background">
          <div className="modal-header">
            <h5 className="modal-title">Game Over</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseModal}
            ></button>
          </div>
          <div className="modal-body d-flex flex-colum aling-items-center">
            <p className="display-6 text-center mb-3 mt-3 text-danger">
              Congratulations <span className="player-name">{playerName}</span>{" "}
              you won the game
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
