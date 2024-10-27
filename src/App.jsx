import { useEffect, useState } from "react";
import Login from "./components/Login";
import { getTokenFromUrl } from "../spotify";
import MainContent from "./components/MainContent";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; // clearing the token from url
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);
  // console.log(token)
  return (
    <>
      <div>{token ? <MainContent /> : <Login />}</div>
    </>
  );
}

export default App;
