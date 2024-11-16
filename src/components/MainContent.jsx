import { SpotifyData } from "@/contexts/SpotifyContext";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef, useState } from "react";

const MainContent = () => {
  const { newrelease, topTracks, featured } = SpotifyData();
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    let newPosition =
      direction === "left" ? scrollPosition - 200 : scrollPosition + 200;

    if (newPosition < 0) newPosition = 0;
    if (newPosition > maxScroll) newPosition = maxScroll;

    setScrollPosition(newPosition);
    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-spotify-sidebar  rounded-lg text-white  flex flex-col p-4">
        {/* featured playlist */}
        <div>
          {featured ? (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="text-white text-xl font-bold ">
                  Featured Playlist
                </p>
                <div className="flex ">
                  {/* left arrow */}
                  <ChevronLeft
                    size={40}
                    onClick={() => scroll("left")}
                    className="cursor-pointer"
                  />
                  {/* right arrow */}
                  <ChevronRight
                    size={40}
                    onClick={() => scroll("right")}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <div
                ref={containerRef}
                className="overflow-x-auto flex space-x-4 p-4 hide-scrollbar "
              >
                {featured.map((item, index) => (
                  <div
                    key={index}
                    className="flex-none w-40 hover:bg-[#1E1E1E] rounded-lg cursor-pointer "
                  >
                    <img
                      src={item.images[0].url}
                      alt={item.name}
                      className="w-full h-auto rounded-md "
                    />
                    <div className="text-white mt-2 ">
                      <div className="font-sans">{item.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {/* new release */}
        <div>
          {newrelease ? (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="text-white text-xl font-bold ">New Release</p>
                <div className="flex ">
                  {/* left arrow */}
                  <ChevronLeft
                    size={40}
                    onClick={() => scroll("left")}
                    className="cursor-pointer"
                  />
                  {/* right arrow */}
                  <ChevronRight
                    size={40}
                    onClick={() => scroll("right")}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <div
                ref={containerRef}
                className="overflow-x-auto flex space-x-4 p-4 hide-scrollbar "
              >
                {newrelease.map((item, index) => (
                  <div
                    key={index}
                    className="flex-none w-40 hover:bg-[#1E1E1E] rounded-lg cursor-pointer "
                  >
                    <img
                      src={item.images[0].url}
                      alt={item.name}
                      className="w-full h-auto rounded-md "
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

        {/* top tracks */}
        <div>
          {topTracks ? (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="text-white text-xl font-bold ">Top Tracks</p>
                <div className="flex ">
                  {/* left arrow */}
                  <ChevronLeft
                    size={40}
                    onClick={() => scroll("left")}
                    className="cursor-pointer"
                  />
                  {/* right arrow */}
                  <ChevronRight
                    size={40}
                    onClick={() => scroll("right")}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <div
                ref={containerRef}
                className="overflow-x-auto flex space-x-4 p-4 hide-scrollbar "
              >
                {topTracks.map((item, index) => (
                  <div
                    key={index}
                    className="flex-none w-40 hover:bg-[#1E1E1E] rounded-lg cursor-pointer "
                  >
                    <img
                      src={item.album.images[0].url}
                      alt={item.name}
                      className="w-full h-auto rounded-md "
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
      </div>
    </>
  );
};

export default MainContent;
