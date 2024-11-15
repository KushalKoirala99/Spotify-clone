import { Search } from "lucide-react";
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
          className=" w-[190px] bg-transparent  border-none text-white font-sans  focus:outline-none focus-visible:outline-none focus-visible:ring-0 lg:w-[300px] "
        ></Input>
      </div>
    </>
  );
};

export default SearchBar;
