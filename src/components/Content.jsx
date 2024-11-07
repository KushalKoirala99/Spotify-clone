import Sidebar from "./Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Content = () => {
  return (
    <>
      {/* <div className="flex h-screen">
         <ResizablePanelGroup
      direction="vertical"
      className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
      </div> */}
      <div className="flex h-screen">
  <ResizablePanelGroup
    direction="horizontal"
    className=""
  >
    <ResizablePanel defaultSize={20} className="flex-shrink-0 min-w-[5%] bg-green-400  ">
      <div className="">
        <Sidebar />
      </div>
    </ResizablePanel>

    <ResizableHandle className="bg-black hover:bg-gray-600" />

    <ResizablePanel defaultSize={60} className="flex-grow bg-red-500 min-w-[50%] ">
      <div className="flex h-full items-center justify-center p-6">
        <span className="font-semibold">Content</span>
      </div>
    </ResizablePanel>


    <ResizableHandle className="bg-black hover:bg-gray-600" />

    <ResizablePanel defaultSize={20} className="flex-shrink-0 bg-yellow-300 max-w-[25%]">
      <div className="flex h-full items-center justify-center p-6">
        <span className="font-semibold">another content</span>
      </div>
    </ResizablePanel>

  </ResizablePanelGroup>
</div>

    </>
  );
};

export default Content;
