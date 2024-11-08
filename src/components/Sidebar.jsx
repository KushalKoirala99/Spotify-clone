import { Library } from "lucide-react";
import { useState } from "react";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const [isOpen,setIsOpen] = useState(true)

  const toggleSidebar = () =>{
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className={`border border-black bg-spotify-sidebar w-80 rounded-lg bg text-white transition-all duration-300 ease-in-out ${isOpen ? 'w-80' : 'w-20'}`}>


        {/* logo for  library and toggle button */}
        <div className="flex p-2 mb-3">
          <div className="cursor-pointer ">
            <button onClick={toggleSidebar}>
            <Library size={40} color="white" />
            </button>
          </div>

          <div className={`flex items-center ml-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`  }>
            Your Library
          </div>
        </div>


        {/* playlist starts from here */}
        <div >
          <SidebarItems />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
