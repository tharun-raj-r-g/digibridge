import mentor from "../images/mentor.png";
import girl from "../images/girl.png";
const Mentor = () => {
  return (
    <div
      className={"flex flex-col justify-center align-middle pt-8 items-center"}
    >
      <h1 className="font-poppins font-bold text-[45px] mb-5">
        Meet Your Mentor
      </h1>
      <div>
        <img src={girl} className="h-[200px] w-[200px]" alt={"avatar"} />
      </div>
      <div className="h-[70px] bg-[#d9d9d9] w-[36%] rounded-3xl ml-[10px] relative mb-7 flex-row flex mt-8">
        <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-around items-center">
          <h1 className="font-semibold text-3xl">Ms.Jane Doe</h1>
        </div>
      </div>
      <div className="h-[70px] bg-[#93e3d8] w-[16%] rounded-3xl ml-[10px] relative mb-5 flex-row flex mt-8">
        <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-around items-center">
          <h1 className="font-semibold text-2xl">Book Slot !</h1>
        </div>
      </div>
      <div className="h-[150px] bg-[#042455] w-[30%] rounded-3xl ml-[10px] relative flex-col flex p-5">
        <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-col flex justify-around items-center p-5">
          <h1 className="font-semibold text-2xl text-white">Mentor Tip !</h1>
          <h1 className="text-1xl text-white">Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua.</h1>
        </div>
      </div>
    </div>
  );
};
export default Mentor;
