import MainContent from "./MainPage";
import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <>
      <div className="flex flex-1 overflow-hidden mt-2">
        <div className="overflow-y-auto">
          <Sidebar />
        </div>
        <div className="mx-1 border  border-black flex-1 rounded-lg overflow-y-auto">
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Content;
