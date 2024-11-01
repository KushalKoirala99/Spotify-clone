import { useEffect } from "react";
import Login from "./components/Login";
import MainContent from "./components/MainContent";
import { getUserData } from "./components/spotify-data.service";
import { useToken } from "./contexts/tokenContext";

function App() {

  const {token} = useToken();

  useEffect(() => {
    if (token) {
      userData();
    }
  });

  async function userData() {
    try {
      const res = await getUserData(token);
      console.log(res);
    } catch (e) {
      console.log("Failed to get user data:", e);
    }
  }

  return (
    <>
      <div>{token ? <MainContent /> : <Login />}</div>
    </>
  );
}

export default App;
