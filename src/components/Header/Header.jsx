import logo from "./../../assets/images/logo.svg";
import "./styles.scss";

const Header = () => (
  <header className="p-3 bg-black bg-opacity-25 d-flex align-items-center">
    <img className="header__logo" src={logo} alt="logo" />
    <span className="ml-2 header__title">MEMORYO</span>
  </header>
);

export default Header;
