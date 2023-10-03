import React, { useEffect, useState } from "react";
import axios from "axios";
import { Howl, Howler } from "howler";

const PendingAppointments = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use axios to fetch data from the API
    axios
      .get("https://backendserver-9s51.onrender.com/api/appointments")
      .then((response) => {
        const data = response.data;
        if (Array.isArray(data)) {
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
      <h2>Pending Appointments</h2>
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
              user.appointments.map((appointment) => {
                if (appointment.status === "accepted") {
                  return (
                    <tr key={appointment._id}>
                      <td>{appointment.fullName}</td>
                      <td>{appointment.service}</td>
                      <td>{appointment.selectedDate}</td>
                      <td>{appointment.selectedHour}</td>
                      <td>{appointment.phoneNumber}</td>
                      <td>{appointment.status}</td>

                      <td>
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
                  );
                } else {
                  return null; // Skip appointments with status other than "pending"
                }
              })
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PendingAppointments;
