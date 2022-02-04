import React from "react";
import { useSidebarContext } from "../contexts/sidebarContext";

const Header = () => {
  const { openSidebar } = useSidebarContext();

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <h1>SRE React Sidebar Menu</h1>
        </div>
        <div className="top-menu">
          <button onClick={openSidebar}>Menu</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
