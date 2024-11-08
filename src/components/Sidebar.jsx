import { Library } from "lucide-react";
import SidebarPlaylist from "./SidebarPlaylist";

const Sidebar = () => {
  return (
    <>
      <div className="border border-black bg-spotify-sidebar w-80 rounded-lg bg text-white">
        {/* logo for  library */}
        <div className="flex p-2 mb-3">
          <div className="">
            <Library size={40} color="white"/>
          </div>
          <div className=" flex items-center ml-4 ">
            Your Library
          </div>
        </div>
        <div>
          <SidebarPlaylist />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
