import Dropdown from "./Dropdown";


const Header = () => {
    return (
        <div className="header">
          <div className="overlay">
            <div className="header-top">
              <p className="header-text">Mike's corner</p>
              <Dropdown />
            </div>
          </div>
        </div>
      );
};

export default Header;
