import { useState } from "react";

import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const Content = () => {
  const [isOpen,setIsOpen] = useState(true)

  const toggleSidebar = () =>{
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="flex flex-1 overflow-hidden mt-4">
        <div className={`${isOpen?'overflow-auto':'overflow-x-hidden'}`}>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        </div>
        <div className="mx-1  flex-1  overflow-y-auto overflow-x-hidden">
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Content;
