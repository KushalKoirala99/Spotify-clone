import { SpotifyData } from "@/contexts/SpotifyContext";

const SidebarItems = () => {
  const { user , userId } = SpotifyData();

  return (
    <>
      <span className="hover:text-white">
        Your Playlist
        {user ? <span>{user.display_name}</span>: null}
        {userId}
      </span>
    </>
  );
};

export default SidebarItems;
