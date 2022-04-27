import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import SidebarIcon from "./SidebarIcon";
import { SidebarData } from "./SidebarData";


const Sidebar = () => {

  const linkTo = (path) => {
    console.log("click")
    return () => {
      window.location.pathname = path
    } 
  }

  return (
    <div className="sidebar">
      <SidebarIcon />
      <ul className="sidebar-list">
        {SidebarData.map((value, key) => (
          <li key={key} className={`row ${window.location.pathname == value.link?"active":""}`} onClick={linkTo(value.link)}>
            <div className="icon">{value.icon}</div>
            <div className="title">{value.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
