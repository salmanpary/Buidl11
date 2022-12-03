import React, { useState } from "react";
import Playersdisplay from "../../Components/Playerdisplay";  
import Navbar from "../../Components/Navbar";



const allplayers = [
  { name: "virat", id: 1 },
  { name: "Dhoni", id: 2 },
  { name: "Sachin", id: 3 },
  { name: "Ricky", id: 4 },
];

function SelectPlayers() {
  const [allplayers, setAllplayers] = useState([]);
  return ( 
    <div>
      <div className="flex justify-start overflow-hidden container-1 font-inter">
      <img className="absolute h-screen w-screen -z-10 " src="/bg.jpg"/>
      
      <div className="Navbar min-w-[22rem] card-blur faded" >
        <Navbar/>
      </div>

      <div className="h-screen flex flex-col  card-blur w-full">
        <h1 className="ml-12 mt-12 text-white mb-12 font-semibold text-5xl">My Team</h1>
        <div className="list-container ">
        <div className=" Line h-[1px] w-[64rem] bg-white opacity-30 ml-12"></div>
          <h2 className="ml-12 mt-12 mb-8 text-white font-semibold opacity-80 text-xl">Select and form team</h2>
          <div className="flex justify-center h-screen">
            <Playersdisplay
              setAllplayers={setAllplayers}
              allplayers={allplayers}
              Teamname="INDIA"
            />
            <div className="h-[32rem] w-[1px] mr-8 bg-white opacity-20"></div>
            <Playersdisplay
              setAllplayers={setAllplayers}
              allplayers={allplayers}
              Teamname="PAKISTAN"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SelectPlayers;
