import React, { useState, useContext } from "react";

const SidebarContext = React.createContext();

const SidebarProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openSidebar = () => {
    setIsMenuOpen(true);
  };

  const closeSidebar = () => {
    setIsMenuOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isMenuOpen, openSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Add custom hook to use context
export const useSidebarContext = () => {
  return useContext(SidebarContext);
};

export { SidebarContext, SidebarProvider };
