import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import { FaBell, FaRegBell } from "react-icons/fa";

import "./Notifications.css";

function Notifications() {

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchNotifications = async () => {

      const data = await getNotifications();

      setNotifications(data);

      setLoading(false);

    };

    fetchNotifications();

  }, []);

  if (loading) {
    return <h2>Loading Notifications...</h2>;
  }

  return (

    <div className="notifications-page">

      {/* Header */}

      <div className="notifications-header">

        <div className="header-icon">
          <FaRegBell />
        </div>

        <div className="notifications-text">

          <h1>Notifications Center</h1>

          <p>
            Stay updated with announcements, reminders and important events
          </p>

        </div>

      </div>

      {/* Notification List */}

      <div className="notification-list">

        {notifications.map((item) => (

          <div
            className="notification-card"
            key={item.id}
          >

            <div className="notification-icon">
              <FaBell />
            </div>

            <div className="notification-content">

              <h3>{item.title}</h3>

              <p>{item.date}</p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Notifications;