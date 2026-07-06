import { useEffect, useState } from "react";
import { getProfile } from "../services/api";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaGraduationCap,
  FaUserGraduate,
  FaChartLine,
  FaTrophy
} from "react-icons/fa";

import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      setProfile(data);
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <h2>Loading Profile...</h2>;
  }

  return (
    <div className="profile-page">

      <button className="back-btn">
        ← Back to Students
      </button>

      <div className="profile-card">

        {/* Header */}
        <div className="profile-header"></div>

        {/* Top */}
        <div className="profile-top">

          <div className="profile-avatar">
            <div className="avatar-circle">👤</div>
          </div>

          <div className="profile-info">
            <h1>{profile.name}</h1>
            <p>
              {profile.rollNo} • {profile.department}
            </p>
          </div>

          <div className="status">
            {profile.status}
          </div>

        </div>

        {/* Body */}
        <div className="profile-body">

          <div className="profile-grid">

            {/* Contact */}
            <div className="info-card">

              <h2>Contact Information</h2>

              <div className="info-item">
                <FaEnvelope />
                <span>{profile.email}</span>
              </div>

              <div className="info-item">
                <FaPhone />
                <span>{profile.phone}</span>
              </div>

              <div className="info-item">
                <FaMapMarkerAlt />
                <span>{profile.address}</span>
              </div>

              <div className="info-item">
                <FaBirthdayCake />
                <span>{profile.dob}</span>
              </div>

            </div>

            {/* Academic */}
            <div className="info-card">

              <h2>Academic Details</h2>

              <div className="info-item">
                <FaGraduationCap />
                <span>Department : {profile.department}</span>
              </div>

              <div className="info-item">
                <FaUserGraduate />
                <span>Semester : {profile.semester}</span>
              </div>

              <div className="info-item">
                <FaChartLine />
                <span>CGPA : {profile.gpa}</span>
              </div>

              <div className="info-item">
                <FaChartLine />
                <span>Attendance : {profile.attendance}%</span>
              </div>

            </div>

            {/* Performance */}
            <div className="info-card">

              <h2>Performance</h2>

              <div className="info-item">
                <FaChartLine />
                <span>Credits : {profile.credits}</span>
              </div>

              <div className="info-item">
                <FaChartLine />
                <span>Projects : {profile.projects}</span>
              </div>

              <div className="info-item">
                <FaTrophy />
                <span>{profile.achievement}</span>
              </div>

            </div>

            {/* Skills */}
            <div className="info-card">

              <h2>Skills</h2>

              <div className="skills">
                {profile.skills.map((skill, index) => (
                  <span className="skill-chip" key={index}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;