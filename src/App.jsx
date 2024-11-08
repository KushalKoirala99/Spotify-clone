import { useEffect, useState } from "react";
import Login from "./components/Login";
import { getTokenFromUrl } from "./components/spotify-token";
import MainPage from "./components/MainPage";

function App() {
  const [token, setToken] = useState(
    sessionStorage.getItem("spotify_token") || null
  ); // need to change to to localStorage

  useEffect(() => {
    //retrieve token from Url
    const hash = getTokenFromUrl();
    window.location.hash = " "; //clear the hash to clean up the url
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      sessionStorage.setItem("spotify_token", _token);
    }

    const expiresIn = 3600; //Expiration time in seconds
    const expirationTIme = Date.now() + expiresIn * 1000; //current time in miliseconds + expiration time
    sessionStorage.setItem("token_expiration", expirationTIme);
  }, []);

  //checking if token has expired
  const isExpired = () => {
    const expirationTIme = sessionStorage.getItem("token_expiration");

    return Date.now() > expirationTIme;
  };

  useEffect(() => {
    if (isExpired()) {
      setToken(null);
      sessionStorage.removeItem("spotify_token");
      sessionStorage.removeItem("token_expiration");
    }
  }, []);

  return (
    <>
      <div>{token ? <MainPage /> : <Login />}</div>
    </>
  );
}

export default App;
