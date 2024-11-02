import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <>
      <div className="flex flex-1 border border-black">
        <Sidebar />
        <div className=" flex-1">content
        

        </div>
      </div>
    </>
  );
};

export default Content;
