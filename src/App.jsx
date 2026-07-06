import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import StudentProfile from "./pages/StudentProfile";
import Courses from "./pages/Courses";
import Attendance from "./pages/Attendance";
import Notifications from "./pages/Notifications";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Dashboard */}
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        {/* Student List */}
        <Route
          path="/students"
          element={
            <Layout>
              <Students />
            </Layout>
          }
        />

        {/* Individual Student Profile */}
        <Route
          path="/student/:id"
          element={
            <Layout>
              <StudentProfile />
            </Layout>
          }
        />

        {/* Courses */}
        <Route
          path="/courses"
          element={
            <Layout>
              <Courses />
            </Layout>
          }
        />

        {/* Attendance */}
        <Route
          path="/attendance"
          element={
            <Layout>
              <Attendance />
            </Layout>
          }
        />

        {/* Notifications */}
        <Route
          path="/notifications"
          element={
            <Layout>
              <Notifications />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;