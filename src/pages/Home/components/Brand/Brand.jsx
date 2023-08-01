import PropTypes from "prop-types";
import "./styles.scss";

const Brand = ({ logo, name }) => (
  <div className="d-flex flex-column align-items-center">
    <img className="col-4" src={logo} alt="logo" />
    <span className="display-1 brand__name">{name}</span>
  </div>
);

Brand.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Brand;
