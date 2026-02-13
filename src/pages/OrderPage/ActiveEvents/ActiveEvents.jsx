import React, { useEffect, useState } from "react";
import "./ActiveEvents.css";

const ActiveEventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/events/active/list")
      .then((res) => res.json())
      .then((data) => {
        // Sort by display_order ascending
        const sorted = data.sort(
          (a, b) => a.display_order - b.display_order
        );
        setEvents(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching active events:", err);
        setLoading(false);
      });
  }, []);

  const handleRedirect = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <div className="active-events-page">
        <h2 className="active-events-title">Live Events</h2>

        {loading ? (
          <p className="loading-text">Loading events...</p>
        ) : events.length === 0 ? (
          <p className="no-events-text">No active events available.</p>
        ) : (
          <div className="events-grid">
            {events.map((event) => (
              <div
                key={event.id}
                className="event-card"
                onClick={() => handleRedirect(event.redirect_url)}
              >
                <img
                  src={event.image_url}
                  alt={event.title}
                  className="event-image"
                />

                <div className="event-content">
                  <h3>{event.title}</h3>

                  <p className="event-description">
                    {event.description}
                  </p>

                  <p className="event-location">
                    📍 {event.location}
                  </p>

                  <p className="event-dates">
                    {new Date(event.start_at).toLocaleDateString()} -{" "}
                    {new Date(event.end_at).toLocaleDateString()}
                  </p>

                  <span className="event-type-badge">
                    {event.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ActiveEventsPage;
