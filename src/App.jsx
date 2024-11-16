import { useEffect, useState } from "react";
import Login from "./components/Login";
import { getTokenFromUrl } from "./components/spotify-token";
import Page from "./components/Page";
import { setAccessToken } from "./components/data.service";
import { SpotifyProvider } from "./contexts/SpotifyContext";

function App() {
  const [token, setToken] = useState(
    localStorage.getItem("spotify_token") || null
  ); // need to change to to localStorage

  useEffect(() => {
    //retrieve token from Url
    const hash = getTokenFromUrl();
    window.location.hash = " "; //clear the hash to clean up the url
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      localStorage.setItem("spotify_token", _token);
      setAccessToken(_token);
    } else if (token) {
      setAccessToken(token);
    }

  
  }, [token]);

 

  return (
    <>
      <div>
        {token ? (
          <SpotifyProvider>
            <Page />
          </SpotifyProvider>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default App;
