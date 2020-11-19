import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="menor">
        <img src="https://cdn.icon-icons.com/images/icon-icons.svg" />
      </div>

      <div className="maior">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/info">Info</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
