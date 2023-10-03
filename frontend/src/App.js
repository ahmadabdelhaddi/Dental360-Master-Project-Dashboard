import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AllAppointments from "./pages/Appointments/AllAppointments";
import User from "./pages/User";
import LiveAppointments from "./pages/Appointments/LiveAppointments";
import PendingAppointments from "./pages/Appointments/PendingAppointments";
import Sidebar from "./components/Sidebar";
import Users from "./pages/Users";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <div className="dashboardContent">
          <div className="row p-0 m-0">
            {user && user.role === "admin" && (
              <div className="col-2">
                <Sidebar />
              </div>
            )}

            <div className={`content col-${user ? "10" : "12"} p-0`}>
              <Navbar />

              <Routes>
                <Route
                  path="/"
                  element={
                    user ? (
                      user.role === "admin" ? (
                        <Home />
                      ) : (
                        <User />
                      )
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />

                <Route
                  path="/login"
                  element={!user ? <Login /> : <Navigate to="/" />}
                />
                <Route
                  path="/signup"
                  element={!user ? <Signup /> : <Navigate to="/" />}
                />

                <Route
                  path="/pending-appointments"
                  element={
                    user ? <PendingAppointments /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/live-appointments"
                  element={
                    user ? <LiveAppointments /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/all-appointments"
                  element={
                    user ? <AllAppointments /> : <Navigate to="/login" />
                  }
                />

                <Route
                  path="/users"
                  // element={user ? <Users /> : <Navigate to="/login" />}
                  element={<Users />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
