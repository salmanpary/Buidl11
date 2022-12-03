import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="text-white font-inter text-6xl ml-4 mt-8 mb-14 font-bold faded rounded-2xl p-4 mr-4  ">
        <span>Buidl 11</span>
      </div>
      <div className="routes h-[32rem] w-full flex flex-col gap-6 ml-6 ">
        <div className="font-semibold  text-white text-2xl ">Home</div>
        <div className="font-semibold text-white text-2xl">Contests</div>
        <div className="font-semibold text-white text-2xl">My Contests</div>
        <div className=" font-semibold text-white text-2xl">How To Play</div>
        <div className=" font-semibold text-white text-2xl">ContactUs</div>
      </div>
      <div className=" Line h-[1px] w-[18rem] bg-white opacity-20 ml-6 rounded-xl"></div>
      <div className="Profile faded h-20 rounded-xl mx-4 mt-6 flex justify-start items-center">
        <img className="rounded-full bg-white h-12 w-12 ml-4"/>
         <div className="flex flex-col text-white font-semibold text-sm ml-4">
            
            <span>Salman Pary</span>
            <span className="opacity-70 text-xs">premium Member</span>
         </div>
      </div>
    </div>
  );
};

export default Navbar;
