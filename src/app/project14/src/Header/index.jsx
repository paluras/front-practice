import "./style.css";

const Header = () => {
  return (
    <header>
      <h1>Fraser&#174;</h1>
      <nav>
        <ul>
          <a>Buy</a>
          <a>Sell</a>
          <a>Charter</a>
          <a>Manage</a>
        </ul>
      </nav>
      <nav>
        <ul>
          <a href="">About</a>
          <a href="">News</a>
          <button>
            <a href="">&#x2022; Build your own</a>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
