// packages
import React from "react";

// css
import "./sidebar.css";

// image
import Board from "./Board";

// icons
import { PathIcons } from "../utils/PathIcons";

const Sidebar = () => {
  return (
    <div className="continuer-sidebar">
      {/* logo /}

      {/ sidebar boards */}
      <ul className="menu-items mt-5">
        <Board link={"/"} title={"Dashboard"} icon={PathIcons.home} />
        <Board
          link={"/users"}
          title={"Users"}
          icon={PathIcons.users}
        />
        <Board
          link={"/pending-appointments"}
          title={"Pending"}
          icon={PathIcons.PendingAppointments}
        />

        <Board
          link={"/live-appointments"}
          title={"Live "}
          icon={PathIcons.LiveAppointments}
        />
        <Board
          link={"/all-appointments"}
          title={"Appointments"}
          icon={PathIcons.AllAppointments}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
