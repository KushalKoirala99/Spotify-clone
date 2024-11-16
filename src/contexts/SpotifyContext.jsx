import { useState, createContext, useEffect, useContext } from "react";
import {
  getFeaturedlist,
  getNewRelease,
  getTopArtist,
  getTopTracks,
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
  const [topTracks,setTopTracks] = useState();
  const [featured,setFeatured] = useState();


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

        const tracks = await getTopTracks();
        setTopTracks(tracks)

        const featracks = await getFeaturedlist();
        setFeatured(featracks)
      // const recentlyPlayed = await getRecentlyPlayed();
      // setRecentlyPlayed(recentlyPlayed)
    }

    getPlaylist();
  }, []);

  return (
    <SpotifyContext.Provider value={{ userPlaylist, topArtist, newrelease , topTracks , featured  }}>
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
