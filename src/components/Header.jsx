import { Icon } from "lucide-react";
import { house } from "@lucide/lab";
import { getUserData } from "./spotify-data.service";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUserInfo() {
      let token = sessionStorage.getItem('spotify_token')
      const userInfo = await getUserData(token);
      // console.log(userInfo);
      setUser(userInfo.data);
    }

    getUserInfo();
  }, []);

  return (
    <>
      <div className="  bg-black p-2 box-border">
        <div className="flex  justify-center bg-black items-center md:justify-center lg:justify-between">
          {/* spotify logo */}
          <div className="hidden md:block lg:block">
            <img
              src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
              alt="spotify logo"
              className="h-[60px]"
            ></img>
          </div>

          <div className="flex items-center justify-between">
            {/* home button */}
            <div className="flex items-center justify-center rounded-[50%] h-[50px] w-[50px] bg-[#1F1F1F] mr-2 hover:scale-110 cursor-pointer hover:bg-[#2a2a2a]">
              <Icon iconNode={house} size={30} color="white" strokeWidth={2} />
            </div>
            {/* search   */}
            <div className=" flex items-center   px-3 rounded-full p-1   bg-[#1F1F1F]   hover:bg-[#2a2a2a]">
              <SearchBar />
            </div>
          </div>
          {/* user */}
          <div className=" flex justify-center items-center rounded-[50%] h-12 w-12  bg-[#1F1F1F] hover:scale-110 cursor-pointer hover:bg-[#2a2a2a] ">
            {user?.external_urls?.spotify && (
              <a href={user.external_urls.spotify}>
                {/* add a diloagur box saying you ra leaving the app andn gointo soptify */}
                {user?.images?.[0]?.url && (
                  <img
                    src={user.images[1].url}
                    alt="user image"
                    className="h-[35px] rounded-full "
                  />
                )}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
