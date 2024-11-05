import { useEffect, useState } from "react";
import Login from "./components/Login";
import { getTokenFromUrl, loginUrl } from "./components/spotify-token";
import MainContent from "./components/MainContent";

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
    const expirationTIme = Date.now() + expiresIn * 1000; //current time in miliseconds + duration
    sessionStorage.setItem("token_expiration", expirationTIme);
  }, []);

  // checking if token has expired
  const isExpired = () => {
    const expirationTIme = sessionStorage.getItem("token_expiration");
    if (!expirationTIme) {
      return true; //if there is no expiration time treat it as expired
    }
    return Date.now() > expirationTIme;
  };

  useEffect(() => {
    if (isExpired()) {
      setToken(null);
      localStorage.removeItem("spotify_token");
      localStorage.removeItem("token_expiration"); 
    }
  }, []); 

  return (
    <>
      <div>{token ? <MainContent /> : <Login />}</div>
    </>
  );
}

export default App;
