import logo from "./../../assets/images/logo.svg";

import Brand from "./components/Brand/Brand";
import FormRegisterPlayerName from "./components/FormRegisterPlayerName/FormRegisterPlayerName";

import "./styles.scss";

const HomeView = ({ playerName, handleChange, handleSubmit }) => {
  return (
    <div className="container">
      <div className="form__container d-flex flex-column align-items-center">
        <Brand logo={logo} name="MEMORYO" />
        <FormRegisterPlayerName
          playerName={playerName}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default HomeView;
