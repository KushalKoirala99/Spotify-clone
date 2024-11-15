import { useState, createContext, useEffect, useContext } from "react";
import {
  getNewRelease,
  getTopArtist,
  getUserData,
  getUserPlaylist,
} from "@/components/data.service";

const SpotifyContext = createContext();

export const SpotifyProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();
  const [userPlaylist, setUserPlaylist] = useState();
  const [topArtist, setTopArtist] = useState();
  const [newrelease,setNewRelease] = useState();
  // const [recentlyPlayed,setRecentlyPlayed] = useState();



  useEffect(() => {
    async function getUser() {
      const res = await getUserData();
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
      setTopArtist(topArtist);
      setUserPlaylist(list);

        const newRel= await getNewRelease();
        setNewRelease(newRel)
      // const recentlyPlayed = await getRecentlyPlayed();
      // setRecentlyPlayed(recentlyPlayed)
    }

    getPlaylist();
  }, []);

  return (
    <SpotifyContext.Provider value={{ userPlaylist, topArtist, newrelease   }}>
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
