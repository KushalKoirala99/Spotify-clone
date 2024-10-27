import { loginUrl } from "../../spotify";

const Login = () => {
  return (
    <>
      <div className="grid place-items-center h-screen bg-black">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="spotify logo"
        ></img>
        <a  href={loginUrl}
        className="p-5 text-white bg-green-500 rounded-3xl cursor-pointer">LOGIN WITH SPOTIFY</a>
      </div>
    </>
  );
};

export default Login;
