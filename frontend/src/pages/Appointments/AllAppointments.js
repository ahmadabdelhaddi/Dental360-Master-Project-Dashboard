import React, { useEffect, useState } from "react";
import axios from "axios";
import { Howl, Howler } from "howler";

import sounds from "../../Assets/sound.mp3";
import sounds2 from "../../Assets/sound2.mp3";

var sound = new Howl({
  src: [sounds],
});

const AllAppointments = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Use axios to fetch data from the API
    axios
      .get("https://backendserver-9s51.onrender.com/api/appointments")
      .then((response) => {
        const data = response.data;
        if (Array.isArray(data)) {
          // Check if userData is updated
          if (JSON.stringify(data) !== JSON.stringify(userData)) {
            // Play the sound only when userData is updated
            sound.play();
          }
          // Update the state with the fetched data
          setUserData(data);
        } else {
          console.error("Invalid data format:", data);
        }
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      });

    // Cleanup function to unload the sound when the component unmounts
  }, [userData]);

  const handleStatusUpdate = (userId, appointmentId, newStatus) => {
    axios
      .patch(
        `https://backendserver-9s51.onrender.com/api/appointments/updateStatus/${appointmentId}`,
        {
          status: newStatus,
        }
      )
      .then((response) => {
        // Handle success, e.g., update the UI
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  return (
    <div>
      <h2>All Appointments</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Hour</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) =>
              user.appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment.fullName}</td>
                  <td>{appointment.service}</td>
                  <td>{appointment.selectedDate}</td>
                  <td>{appointment.selectedHour}</td>
                  <td>{appointment.phoneNumber}</td>
                  <td>{appointment.status}</td>

                  <td>
                    <button
                      className="btn btn-success m-2"
                      onClick={() =>
                        handleStatusUpdate(
                          user._id,
                          appointment._id,
                          "accepted" // Use lowercase status values
                        )
                      }
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-danger m-2"
                      onClick={() =>
                        handleStatusUpdate(
                          user._id,
                          appointment._id,
                          "declined"
                        )
                      }
                    >
                      Cancel
                    </button>
                    <button
                      className="btn btn-primary m-2"
                      onClick={() =>
                        handleStatusUpdate(
                          user._id,
                          appointment._id,
                          "completed"
                        )
                      }
                    >
                      completed
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllAppointments;
