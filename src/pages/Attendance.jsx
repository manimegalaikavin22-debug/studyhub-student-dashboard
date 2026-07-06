import { useEffect, useState } from "react";
import { getAttendance } from "../services/api";
import { FaClipboardCheck } from "react-icons/fa";
import "./Attendance.css";

function Attendance() {

  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttendance = async () => {
      const data = await getAttendance();
      setAttendance(data);
      setLoading(false);
    };

    fetchAttendance();
  }, []);

  if (loading) {
    return <h2>Loading Attendance...</h2>;
  }

  return (
    <div className="attendance-page">

      {/* Professional Title */}
      <div className="attendance-header">

        <div className="attendance-heading">

          <div className="attendance-icon">
            <FaClipboardCheck />
          </div>

          <div>
            <h1>Student Attendance</h1>
            <p>Track attendance records and student performance</p>
          </div>

        </div>

      </div>

      <table className="attendance-table">

        <thead>
          <tr>
            <th>Student</th>
            <th>Roll No</th>
            <th>Attendance</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {attendance.map((student) => (

            <tr key={student.id}>

              <td>{student.name}</td>

              <td>{student.rollNo}</td>

              <td>{student.attendance}%</td>

              <td>
                <span
                  className={
                    student.status === "Excellent"
                      ? "excellent"
                      : student.status === "Good"
                      ? "good"
                      : "poor"
                  }
                >
                  {student.status}
                </span>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Attendance;