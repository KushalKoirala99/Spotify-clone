import { SpotifyData } from "@/contexts/SpotifyContext";

const MainContent = () => {
  const { newrelease } = SpotifyData();
  return (
    <>
      <div className="bg-spotify-sidebar  rounded-lg text-white  flex flex-col p-4">
        <div>
          {newrelease ? (
            <div className="flex flex-col">
              <div>
                <p className="text-white text-xl font-bold ">New Release</p>
              </div>
              <div className="overflow-x-auto flex space-x-4 py-4 custom-scrollbar">
                {newrelease.map((item, index) => (
                  <div key={index} className="flex-none w-40">
                    <img
                      src={item.images[0].url}
                      alt={item.name}
                      className="w-full h-auto rounded-md"
                    />
                    <div className="text-white mt-2 ">
                      <div className="font-sans">{item.name}</div>
                      <div className="text-gray-400 font-mono">
                        {item.artists[0].name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div>recently played </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default MainContent;
