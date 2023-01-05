import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="text-center">Bob Ross Gallery</h1>
      <nav>
      <li><NavLink to="/">
          View Gallery
        </NavLink></li>

        <li><NavLink to="/comments">
          Comments
        </NavLink></li>
      </nav>
      <img src="https://www.bobross.com/content/bob_ross_img.png" className="Bob-Ross" alt="Bob Ross"></img>
    </header>
  );
}

export default Header;