import { createContext, useContext, useState, useEffect } from "react";
import {
  getTokenFromUrl,
  refreshAccessToken,
} from "./components/spotify-token";

const TokenContext = createContext();


export const TokenProvider = ({ children }) => {

  const [token, setToken] = useState(
    sessionStorage.getItem("spotify_token") || null
  );
  const [refreshToken, setRefreshToken] = useState(
    sessionStorage.getItem("spotify_refresh_token") || null
  );
  const [expiresIn] = useState(3600);

  useEffect(() => {
    //retrieve token from Url
    const hash = getTokenFromUrl();
    window.location.hash = ""; //clear the hash to clean up the url
    const _token = hash.access_token;
    const _refreshToken = hash.refresh_token;

    if (_token) {
      setToken(_token);
      sessionStorage.setItem("spotify_token", _token);
    }

    if (_refreshToken) {
      setRefreshToken(_refreshToken);
      sessionStorage.setItem("spotify_refresh_token", _refreshToken);
    }

    if (_token && refreshToken) {
      const refreshInterval = setTimeout(async () => {
        try {
          const newAccessToken = await refreshAccessToken(refreshToken);
          setToken(newAccessToken);
          sessionStorage.setItem("spotify_token", newAccessToken);
        } catch (error) {
          console.log("Failed to refresh access token:", error);
        }
      }, (expiresIn - 300) * 1000); // Refresh 5 minutes before expiration

      return () => clearTimeout(refreshInterval);
    }
  }, [token, refreshToken, expiresIn]);

  return (
    <TokenContext.Provider value={{ token, setToken, refreshToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
