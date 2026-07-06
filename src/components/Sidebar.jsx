import { NavLink } from "react-router-dom";
import {
  FaGraduationCap,
  FaTachometerAlt,
  FaUserGraduate,
  FaUser,
  FaBook,
  FaCalendarCheck,
  FaBell,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}

      <div className="sidebar-logo">

        <div className="logo-icon">
          <FaGraduationCap />
        </div>

        <div className="logo-text">
          <h2>StudyHub</h2>
          <p>Student Management</p>
        </div>

      </div>

      {/* Menu */}

      <ul>

        <li>
          <NavLink to="/" end>
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/students">
            <FaUserGraduate />
            <span>Students</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile">
            <FaUser />
            <span>Profile</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/courses">
            <FaBook />
            <span>Courses</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/attendance">
            <FaCalendarCheck />
            <span>Attendance</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/notifications">
            <FaBell />
            <span>Notifications</span>
          </NavLink>
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;