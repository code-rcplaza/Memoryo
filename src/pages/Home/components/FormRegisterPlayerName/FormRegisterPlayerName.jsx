import PropTypes from "prop-types";
import "./styles.scss";

const FormRegisterPlayerName = ({ playerName, onChange, onSubmit }) => {
  return (
    <div className="col-sm-9 col-lg-5  col-md-7">
      <form className=" mt-5 d-flex flex-column form">
        <div className="form-floating mb-3 form__body">
          <input
            type="text"
            className="form-control form__input"
            id="playerName"
            placeholder="Player01"
            onChange={onChange}
            value={playerName}
          />
          <label htmlFor="playerName">Creates an amazing player name</label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg form__btn"
          onClick={onSubmit}
        >
          START
        </button>
      </form>
    </div>
  );
};

FormRegisterPlayerName.propTypes = {
  playerName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormRegisterPlayerName;
