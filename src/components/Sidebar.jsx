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
      <div className={`border border-black bg-spotify-sidebar w-80 rounded-lg bg text-gray-500 transition-all duration-300 ease-in-out ${isOpen ? 'max-w-80' : 'max-w-20'}`}>


        {/* logo for  library and toggle button */}
        <button onClick={toggleSidebar}>
        <div className="flex p-2 mb-3 hover:text-white">
          <div className="cursor-pointer ">
            <Library size={40}  />
          </div>

          <div className={`flex items-center ml-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`  }>
            Your Library
          </div>
        </div>
        </button>

        {/* playlist starts from here */}
        <div >
          <SidebarItems />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
