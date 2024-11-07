import { Search, GalleryVerticalEnd } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <>
      <div className="flex justify-center items-center p-2 hover:scale-110 hover:cursor-pointer  ">
        <Search color="white" size="30" />
      </div>
      <div>
        <Input
          type="text"
          placeholder="What do you want to play?"
          className="  w-[300px] bg-transparent  border-none text-white font-sans  focus:outline-none focus-visible:outline-none focus-visible:ring-0 "
        ></Input>
      </div>
      <div className=" flex justify-center items-center px-2  hover:scale-110 cursor-pointer">
        <GalleryVerticalEnd color="white" size="30" />
      </div>
    </>
  );
};

export default SearchBar;
