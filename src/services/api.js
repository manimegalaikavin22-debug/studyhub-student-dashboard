import axios from "axios";

import studentsData from "../mock/students.json";
import dashboardData from "../mock/dashboard.json";
import coursesData from "../mock/courses.json";
import attendanceData from "../mock/attendance.json";
import notificationsData from "../mock/notifications.json";
import profileData from "../mock/profile.json";

export const getStudents = async () => {
  try {
    const response = await axios.get("https://wrong-api-url.com/students");
    return response.data;
  } catch (error) {
    return studentsData;
  }
};

export const getDashboard = async () => {
  try {
    const response = await axios.get("https://wrong-api-url.com/dashboard");
    return response.data;
  } catch (error) {
    return dashboardData;
  }
};

export const getCourses = async () => {
  try {
    const response = await axios.get("https://wrong-api-url.com/courses");
    return response.data;
  } catch (error) {
    return coursesData;
  }
};

export const getAttendance = async () => {
  try {
    const response = await axios.get("https://wrong-api-url.com/attendance");
    return response.data;
  } catch (error) {
    return attendanceData;
  }
};

export const getNotifications = async () => {
  try {
    const response = await axios.get("https://wrong-api-url.com/notifications");
    return response.data;
  } catch (error) {
    return notificationsData;
  }
};

export const getProfile = async () => {
  try {
    const response = await axios.get("https://wrong-api-url.com/profile");
    return response.data;
  } catch (error) {
    return profileData;
  }
};