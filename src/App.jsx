import { useEffect, useState } from "react";
import Login from "./components/Login";
import {
  getTokenFromUrl,
} from "./components/spotify-token";
import MainContent from "./components/MainContent";

function App() {
  const [token, setToken] = useState(
    sessionStorage.getItem("spotify_token") || null
  );


  useEffect(() => {
    //retrieve token from Url
    const hash = getTokenFromUrl();
    window.location.hash = " "; //clear the hash to clean up the url
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      sessionStorage.setItem("spotify_token", _token);
    }


  }, [token]);


  

  return (
    <>
      <div>{token ? <MainContent /> : <Login />}</div>
    </>
  );
}

export default App;
