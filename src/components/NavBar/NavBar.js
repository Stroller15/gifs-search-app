import SearchBar from "components/SearchBar/SearchBar";
import GiphyLogo from "assets/gif/giphy-logo.gif";
import Svgs from "assets/svgs";
import "./NavBar.css";

const NavBar = ({ searchTerm, setSearchTerm, handleSubmit, handleClick }) => {
  return (
    <header className="navbar">
      <nav className="navbar__content">
        <div className="navbar__logo-container">
          <Svgs.GiphyLogo className="navbar__giphy-logo" />
        </div>

        <img
          className="navbar__gif-small-logo"
          src={GiphyLogo}
          alt="giphy-logo.gif"
        />
      </nav>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
      />

      <div className="navbar__explore-container">
        <p className="navbar__explore-content">Explore GIFs</p>
      </div>
    </header>
  );
};

export default NavBar;
