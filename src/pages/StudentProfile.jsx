import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStudents } from "../services/api";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCalendarAlt,
  FaAward,
  FaUserGraduate,
  FaBookOpen
} from "react-icons/fa";

import "./StudentProfile.css";

function StudentProfile() {
  const { id } = useParams();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const data = await getStudents();

      const selected = data.find(
        (item) => item.id === Number(id)
      );

      setStudent(selected);
    };

    fetchStudent();
  }, [id]);

  if (!student) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="profile-page">

      {/* Banner */}
      <div className="profile-banner"></div>

      {/* Header */}
      <div className="profile-header">
  <img
    src={student.image}
    alt={student.name}
    className="profile-image"
  />

  <div className="profile-info">
    <h1>{student.name}</h1>
    <p>{student.roll}</p>
    <span className="status">{student.status}</span>
  </div>
</div>

      {/* 2 × 2 Grid */}
      <div className="profile-grid">

        {/* Contact */}
        <div className="profile-card">

          <h2>Contact Information</h2>

          <p>
            <FaEnvelope />
            {student.email}
          </p>

          <p>
            <FaPhone />
            {student.phone}
          </p>

          <p>
            <FaMapMarkerAlt />
            {student.address}
          </p>

          <p>
            <FaCalendarAlt />
            {student.dob}
          </p>

        </div>

        {/* Academic */}
        <div className="profile-card">

          <h2>Academic Details</h2>

          <p>
            <FaUserGraduate />
            {student.department}
          </p>

          <p>
            <FaBookOpen />
            Semester {student.semester}
          </p>

          <p>
            <FaGraduationCap />
            {student.year}
          </p>

          <p>
            CGPA : {student.cgpa}
          </p>

          <p>
            Attendance : {student.attendance}%
          </p>

        </div>

        {/* Performance */}
        <div className="profile-card">

          <h2>Performance</h2>

          <p>
            Credits : {student.credits}
          </p>

          <p>
            Projects : {student.projects}
          </p>

          <p>
            <FaAward />
            {student.achievements}
          </p>

        </div>

        {/* Skills */}
        <div className="profile-card">

          <h2>Skills</h2>

          <div className="skills">

            {student.skills.map((skill, index) => (
              <span key={index}>
                {skill}
              </span>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentProfile;