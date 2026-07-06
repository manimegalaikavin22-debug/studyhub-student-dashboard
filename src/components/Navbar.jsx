import { FaSearch, FaBell } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      {/* Left */}
      <div className="navbar-left">
        <div className="search-container">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search students, courses..."
            className="search-box"
          />
        </div>
      </div>

      {/* Right */}
      <div className="navbar-right">

        <div className="notification">
          <FaBell />
          <span className="notify-count">4</span>
        </div>

        <div className="profile">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Profile"
          />

          <div className="profile-info">
            <h4>Manimegalai</h4>
            <p>Computer Science</p>
          </div>
        </div>

        <button className="logout-btn">
          Logout
        </button>

      </div>

    </header>
  );
}

export default Navbar;