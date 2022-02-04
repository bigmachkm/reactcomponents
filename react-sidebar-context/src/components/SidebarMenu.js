import React from "react";
import "./sidebarStyles.css";
import { useSidebarContext } from "../contexts/sidebarContext";

const SidebarMenu = () => {
  const { isMenuOpen, closeSidebar } = useSidebarContext();

  return (
    <aside className={`${isMenuOpen ? "sidebar-menu show" : "sidebar-menu"}`}>
      <button className="close-menu" onClick={closeSidebar}>
        X
      </button>
      <div className="sidebar-title">
        <h2>Menu</h2>
      </div>
      <ul className="sidebar-list">
        <li>Menu Item One</li>
        <li>Menu Item Two</li>
        <li>Menu Item Three</li>
      </ul>
    </aside>
  );
};

export default SidebarMenu;
