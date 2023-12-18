
import physicsanimate from "../images/physics-animate-main.jpg";
import {useNavigate} from "react-router-dom";

const ThreeDModel = () => {
  const navigate= useNavigate();

  return (
    <div className={"flex flex-col justify-between"}>
      <div className="h-1/5 bg-inherit flex-row flex justify-center mb-20">
        <div className="h-inherit w-[80%] flex-row flex text-center justify-around">
          <img src={physicsanimate} className="h-[70px] animate-spin" />
          <h1 className="font-poppins font-bold text-[45px]">3D Model - Electricity</h1>
          <img src={physicsanimate} className="h-[70px] animate-spin" />
        </div>
      </div>
      <div className="h-[80px] w-6/7 rounded-3xl relative flex-row flex justify-around mb-10">
        <div className="h-[80px] bg-[#d9d9d9] w-[100%] rounded-3xl ml-[10px] relative mb-7 flex-row flex">
          <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-between items-center pr-10 pl-10">
            <h1 className="font-semibold text-3xl">Inductor</h1>
            <div className="h-[50px] bg-[#b47ede] w-[150px] rounded-2xl justify-center items-center flex cursor-pointer"
            onClick={()=>navigate("/threedmodel/inductor")}>
              <h1 className="text-center text-white font-semibold">Open</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80px] w-6/7 rounded-3xl relative flex-row flex justify-around mb-10">
        <div className="h-[80px] bg-[#d9d9d9] w-[100%] rounded-3xl ml-[10px] relative mb-7 flex-row flex">
          <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-between items-center pr-10 pl-10">
            <h1 className="font-semibold text-3xl">
              Magnetic Effects of Electric Current
            </h1>
            <div className="h-[50px] bg-[#b47ede] w-[150px] rounded-2xl justify-center items-center flex cursor-pointer">
              <h1 className="text-center text-white font-semibold">Open</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80px] w-6/7 rounded-3xl relative flex-row flex justify-around mb-10">
        <div className="h-[80px] bg-[#d9d9d9] w-[100%] rounded-3xl ml-[10px] relative mb-7 flex-row flex">
          <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-between items-center pr-10 pl-10">
            <h1 className="font-semibold text-3xl">Sources of Energy</h1>
            <div className="h-[50px] bg-[#b47ede] w-[150px] rounded-2xl justify-center items-center flex cursor-pointer">
              <h1 className="text-center text-white font-semibold">Open</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80px] w-6/7 rounded-3xl relative flex-row flex justify-around mb-10">
        <div className="h-[80px] bg-[#d9d9d9] w-[100%] rounded-3xl ml-[10px] relative mb-7 flex-row flex">
          <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-between items-center pr-10 pl-10">
            <h1 className="font-semibold text-3xl">Our Environment</h1>
            <div className="h-[50px] bg-[#b47ede] w-[150px] rounded-2xl justify-center items-center flex cursor-pointer">
              <h1 className="text-center text-white font-semibold">Open</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80px] w-6/7 rounded-3xl relative flex-row flex justify-around mb-10">
        <div className="h-[80px] bg-[#d9d9d9] w-[100%] rounded-3xl ml-[10px] relative mb-7 flex-row flex">
          <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-between items-center pr-10 pl-10">
            <h1 className="font-semibold text-3xl">
              Management of Natural Resources
            </h1>
            <div className="h-[50px] bg-[#eee] w-[150px] rounded-2xl justify-center items-center flex cursor-pointer">
              <h1 className="text-center text-black font-semibold">
                Completed
              </h1>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ThreeDModel;
