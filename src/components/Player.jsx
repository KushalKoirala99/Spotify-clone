import { SpotifyData } from "@/contexts/SpotifyContext";

const Player = () => {
  const { img } = SpotifyData();
  return (
    <>
      <div className="flex flex-col-shrink-0 justify-between h-auto bg-spotify-sidebar px-6 py-2 text-gray-400 ">
        {/* <div className="hidden lg:flex items-center gap-4">
          <img src={img} className="w-12"></img>
          <div>
            <p>songName</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 m-auto">
             <div className="flex gap-4">
              
             </div>
        </div> */}
      </div>
    </>
  );
};

export default Player;
