import { useEffect, useState } from "react";
import { getDashboard } from "../services/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

import {
  FaUserGraduate,
  FaBook,
  FaCalendarCheck,
  FaBell,
  FaArrowUp
} from "react-icons/fa";

import "./Dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {

  const [dashboard, setDashboard] = useState(null);

  const chartData = {

    labels: [
      "Attendance",
      "CGPA",
      "Assignments",
      "Projects",
      "Courses"
    ],

    datasets: [
      {
        label: "Student Performance",
        data: [92, 9.1, 88, 95, 85],
        backgroundColor: [
          "#2563eb",
          "#22c55e",
          "#f59e0b",
          "#ef4444",
          "#8b5cf6"
        ]
      }
    ]

  };

  useEffect(() => {

    const fetchDashboard = async () => {

      const data = await getDashboard();

      setDashboard(data);

    };

    fetchDashboard();

  }, []);

  if (!dashboard) {
    return <h2>Loading Dashboard...</h2>;
  }

  return (

    <div className="dashboard">

      <h1 className="dashboard-title">
        Welcome to Student Dashboard 👋

      </h1>
      <br></br><br></br>

      <div className="dashboard-cards">

        <div className="dashboard-card">

          <FaUserGraduate />

          <h2>{dashboard.totalStudents}</h2>

          <p>Total Students</p>

        </div>

        <div className="dashboard-card">

          <FaBook />

          <h2>{dashboard.totalCourses}</h2>

          <p>Courses</p>

        </div>

        <div className="dashboard-card">

          <FaCalendarCheck />

          <h2>{dashboard.attendance}%</h2>

          <p>Attendance</p>

        </div>

        <div className="dashboard-card">

          <FaBell />

          <h2>{dashboard.notifications}</h2>

          <p>Notifications</p>

        </div>

      </div>

      <div className="dashboard-bottom">

        <div className="activity-box">

          <h2>Recent Activities</h2>

          <ul className="activity-list">

            {dashboard.activities.map((item, index) => (

              <li key={index}>

                <span className="activity-dot"></span>

                {item}

              </li>

            ))}

          </ul>

        </div>

        <div className="progress-box">

          <h2>Overall Performance</h2>

          <div className="progress-circle">

            <FaArrowUp />

            <h1>92%</h1>

          </div>

          <p>Excellent Academic Progress</p>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;