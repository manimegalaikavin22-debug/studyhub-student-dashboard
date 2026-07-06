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

import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">

      {/* Sidebar */}

      <aside className="sidebar">

        <div className="sidebar-logo">

          <div className="logo-icon">
            <FaGraduationCap />
          </div>

          <div className="logo-text">
            <h2>StudyHub</h2>
            <p>Student Management</p>
          </div>

        </div>

        <nav>

          <NavLink to="/" end>
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/students">
            <FaUserGraduate />
            <span>Students</span>
          </NavLink>

          <NavLink to="/student/1">
            <FaUser />
            <span>Profile</span>
          </NavLink>

          <NavLink to="/courses">
            <FaBook />
            <span>Courses</span>
          </NavLink>

          <NavLink to="/attendance">
            <FaCalendarCheck />
            <span>Attendance</span>
          </NavLink>

          <NavLink to="/notifications">
            <FaBell />
            <span>Notifications</span>
          </NavLink>

        </nav>

      </aside>

      <main className="content">
        {children}
      </main>

    </div>
  );
}

export default Layout;