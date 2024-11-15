import { useState, createContext, useEffect, useContext } from "react";
import { getTopArtist, getUserData, getUserPlaylist } from "@/components/data.service";

const SpotifyContext = createContext();

export const SpotifyProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();
  const [userPlaylist, setUserPlaylist] = useState();
  const [topArtist,setTopArtist] = useState();

  // test img for player 
  const [img,setImg] = useState();

  useEffect(() => {
    async function getUser() {
      const res = await getUserData();
      //   console.log(res);
      setUser(res);
      if (res) {
        setUserId(res.id);
      }
    }

    getUser();
  }, []);

  useEffect(() => {
    async function getPlaylist() {
      const list = await getUserPlaylist(userId);
      const topArtist = await getTopArtist();
      console.log(list)
     setTopArtist(topArtist)
      setUserPlaylist(list)
      setImg(list[0].images[0].url)
    }

    getPlaylist();
  },[]);

  return (
    <SpotifyContext.Provider value={{ userPlaylist , topArtist , img }}>
      {children}
    </SpotifyContext.Provider>
  );
};

export const SpotifyData = () => {
  const context = useContext(SpotifyContext);
  if (!context) {
    throw new Error("must use within SpotifyProvider");
  }
  return context;
};
