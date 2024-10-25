import Header from "./components/Header";
import Content from "./components/Content";
import Player from "./components/Player";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <Content />
        <Player />
      </div>
    </>
  );
}

export default App;
