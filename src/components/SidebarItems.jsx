import { SpotifyData } from "@/contexts/SpotifyContext";

const SidebarItems = ({ isOpen }) => {
  const { userPlaylist, topArtist } = SpotifyData();

  return (
    <>
      <div className="p-2 ">
        {userPlaylist ? (
          <div>
            {userPlaylist.map((item, value) => {
              return (
                <div
                  key={value}
                  className={`flex hover:cursor-pointer  rounded-lg hover:bg-[#1E1E1E] gap-4 ${
                    isOpen ? `m-2 p-3` : `my-4`
                  }`}
                >
                  <img
                    src={item.images[0].url}
                    className={` ${isOpen ? `w-[60px]` : `w-max`} rounded-lg`}
                  ></img>
                  <div className="hover:text-white">
                    <div className={`${isOpen ? `block` : `hidden`}`}>
                      {item.name.toUpperCase()}
                    </div>
                    <div className={`${isOpen ? `block` : `hidden`}`}>
                      {item.type}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
        <div>
          {topArtist ? (
            <div>
              {topArtist.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`flex hover:cursor-pointer gap-4 rounded-lg hover:bg-[#1E1E1E] ${
                      isOpen ? `m-2 p-3` : `my-4`
                    }`}
                  >
                    <img
                      src={item.images[0].url}
                      className={` rounded-full ${
                        isOpen ? `w-[60px]` : `w-max`
                      }`}
                    ></img>
                    <div className="hover:text-white">
                      <div className={`${isOpen ? `block` : `hidden`}`}>
                        {item.name}
                      </div>
                      <div className={`${isOpen ? `block` : `hidden`}`}>
                        {item.type}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SidebarItems;
