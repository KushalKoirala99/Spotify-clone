import Header from "./Header";
import Content from "./Content";

const Page = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-black">
        <Header />
        <Content />
      </div>
    </>
  );
};

export default Page;
