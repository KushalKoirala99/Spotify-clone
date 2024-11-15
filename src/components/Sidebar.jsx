import { Library } from "lucide-react";
import SidebarItems from "./SidebarItems";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div
        className={`hidden md:block lg:block border border-black  bg-spotify-sidebar w-80 rounded-xl bg text-gray-500 transition-all duration-300 ease-in-out ${
          isOpen ? "max-w-80" : "max-w-20"
        }`}
      >
        {/* logo for  library and toggle button */}
        <button onClick={toggleSidebar}>
          <div
            className={`flex p-2  hover:text-white ${
              isOpen ? `mb-3 m-4` : `m-4`
            }`}
          >
            <div className="cursor-pointer ">
              <Library size={40} />
            </div>

            <div
              className={`flex items-center ml-4 transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              Your Library
            </div>
          </div>
        </button>

        {/* playlist starts from here */}
        <div
          className={`overflow-x-hidden ${
            isOpen ? `text-opacity-100` : `text-opacity-0`
          }`}
        >
          <SidebarItems isOpen={isOpen} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
