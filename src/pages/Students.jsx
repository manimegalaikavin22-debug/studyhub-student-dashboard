import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";
import { getStudents } from "../services/api";

import "./Students.css";

function Students() {

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchStudents = async () => {

      const data = await getStudents();

      setStudents(data);

      setLoading(false);

    };

    fetchStudents();

  }, []);

  if (loading) {
    return <h2>Loading Students...</h2>;
  }

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="students-page">

      <div className="students-header">

        {/* Title */}
        <div className="directory-title">

          <div className="title-icon">
            <FaUserGraduate />
          </div>

          <div className="title-text">
            <h1>Student Directory</h1>
            <p>Manage and view student profiles</p>
          </div>

        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search student..."
          className="student-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="student-grid">

        {filteredStudents.map((student) => (

          <div className="student-card" key={student.id}>

            <img
              src={student.image}
              alt={student.name}
              className="student-image"
            />

            <h2 className="student-name">
              {student.name}
            </h2>

            <p className="student-roll">
              {student.roll}
            </p>

            <p className="student-dept">
              {student.department}
            </p>

            <span
              className={
                student.status === "Active"
                  ? "status active"
                  : student.status === "Graduated"
                  ? "status graduated"
                  : "status leave"
              }
            >
              {student.status}
            </span>

            <p className="student-email">
              {student.email}
            </p>

            <Link
              to={`/student/${student.id}`}
              className="view-btn"
            >
              View Profile
            </Link>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Students;