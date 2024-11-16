import { SpotifyData } from "@/contexts/SpotifyContext";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useScroll } from "./useScroll";  // Import the custom hook

const MainContent = () => {
  const { newrelease, topTracks, featured } = SpotifyData();

  // Use the custom hook for each section
  const newReleaseScroll = useScroll();
  const topTracksScroll = useScroll();
  const featuredScroll = useScroll();

  return (
    <>
      <div className="bg-spotify-sidebar rounded-lg text-white flex flex-col p-4">
        {/* Featured Playlist */}
        {featured && (
          <Section
            title="Featured Playlist"
            data={featured}
            scroll={featuredScroll}
          />
        )}

        {/* New Release */}
        {newrelease && (
          <Section
            title="New Release"
            data={newrelease}
            scroll={newReleaseScroll}
          />
        )}

        {/* Top Tracks */}
        {topTracks && (
          <Section
            title="Top Tracks"
            data={topTracks}
            scroll={topTracksScroll}
          />
        )}
      </div>
    </>
  );
};

// Reusable Section Component
const Section = ({ title, data, scroll }) => (
  <div className="flex flex-col">
    <div className="flex justify-between">
      <p className="text-white text-xl font-bold">{title}</p>
      <div className="flex">
        <ChevronLeft
          size={40}
          onClick={() => scroll.scroll("left")}
          className="cursor-pointer"
        />
        <ChevronRight
          size={40}
          onClick={() => scroll.scroll("right")}
          className="cursor-pointer"
        />
      </div>
    </div>

    <div
      ref={scroll.containerRef}
      className="overflow-x-auto flex space-x-4 p-4 hide-scrollbar"
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="flex-none w-40 hover:bg-[#1E1E1E] rounded-lg cursor-pointer"
        >
          <img
            src={item.images ? item.images[0].url : item.album.images[0].url}
            alt={item.name}
            className="w-full h-auto rounded-md"
          />
          <div className="text-white mt-2">
            <div className="font-sans">{item.name}</div>
            {item.artists && (
              <div className="text-gray-400 font-mono">{item.artists[0].name}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MainContent;
