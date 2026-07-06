import { useEffect, useState } from "react";
import { getCourses } from "../services/api";
import { FaBook, FaBookOpen } from "react-icons/fa";
import "./Courses.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses();
      setCourses(data);
      setFilteredCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const filtered = courses.filter(
      (course) =>
        course.course.toLowerCase().includes(search.toLowerCase()) ||
        course.faculty.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredCourses(filtered);
  }, [search, courses]);

  if (loading) return <h2>Loading Courses...</h2>;

  return (
    <div className="courses-page">

      <div className="courses-header">

        <div className="courses-title">

          <div className="courses-icon">
            <FaBookOpen />
          </div>

          <div className="courses-text">
            <h1>Courses</h1>
            <p>Explore all available subjects and track your progress</p>
          </div>

        </div>

        <div className="courses-search">
          <input
            type="text"
            placeholder="Search course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </div>

      <div className="course-grid">

        {filteredCourses.map((course) => (
          <div className="course-card" key={course.id}>

            <FaBook className="course-book-icon" />

            <h2>{course.course}</h2>

            <p><strong>Faculty:</strong> {course.faculty}</p>

            <p><strong>Credits:</strong> {course.credits}</p>

            <p><strong>Semester:</strong> {course.semester}</p>

            <p><strong>Duration:</strong> {course.duration}</p>

            <p><strong>Status:</strong> {course.status}</p>

            <progress value={course.progress} max="100"></progress>

            <p className="progress-text">
              {course.progress}% Completed
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Courses;