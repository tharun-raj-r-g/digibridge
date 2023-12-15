import home from "../images/dashboard.png";
import boy from "../images/boy1.png";
import { MessageSquare } from "lucide-react";
const Home = () => {
  return (
    <div className="h-screen">
      <div className="h-1/5 bg-inherit flex-row flex">
        <div className="h-inherit w-[50%] flex-col flex text-left justify-around">
          <h1 className="font-poppins font-bold text-[25px]">Dashboard</h1>
          <h1 className="font-poppins font-bold text-[45px]">
            Welcome, John Doe
          </h1>
        </div>
        <div className="h-inherit w-[50%] flex-row flex justify-center items-center">
          <MessageSquare className="h-[50px] w-[50px]"/>
          <img src={boy} className="h-[100px] w-[100px] ml-20" />
        </div>
      </div>
    </div>
  );
};

export default Home;
