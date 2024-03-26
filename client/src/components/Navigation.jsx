import logo from "../assets/logo.png";
import "./Navigation.css";

export default function Navigation() {
  return (
    <header>
      <img className="logo" src={logo} alt="Van Voyage logo"></img>
      <nav>
        <ul>
          <li>
            <a href="/">Rent</a>
          </li>
          <li>
            <a href="/addVan">List</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
