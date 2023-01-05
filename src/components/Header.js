import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="pageTitle">Bob Ross Gallery</h1>
      <nav className="NavLink">
      <li><NavLink activeStyle={{ color: "blue" }} to="/">
          View Gallery
        </NavLink ></li>

        <li><NavLink activeStyle={{ color: "blue" }} to="/mygallery">
          My Gallery
        </NavLink></li>

          <li><NavLink activeStyle={{ color: "blue" }} to="/comments">
          Comments
        </NavLink></li>
      </nav>
      <img src="https://www.bobross.com/content/bob_ross_img.png" className="Bob-Ross" alt="Bob Ross"></img>
    </header>
  );
}

export default Header;