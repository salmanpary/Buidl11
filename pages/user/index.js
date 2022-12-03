import React, { useState } from "react";
import Playersdisplay from "../../Components/Playerdisplay";  



const allplayers = [
  { name: "virat", id: 1 },
  { name: "Dhoni", id: 2 },
  { name: "Sachin", id: 3 },
  { name: "Ricky", id: 4 },
];

function SelectPlayers() {
  const [allplayers, setAllplayers] = useState([]);
  return (

    
    <div className="flex justify-between overflow-hidden container-1">

      
      <div className="Navbar w-64"></div>

      <div className="h-screen flex flex-col ">
        <h1 className="text-center my-8 font-bold text-3xl">User</h1>
        <div className="list-container ">
          <h2 className="text-center mt-8 mb-8">Select and form team</h2>
          <div className="flex justify-center h-screen">
            <Playersdisplay
              setAllplayers={setAllplayers}
              allplayers={allplayers}
              Teamname="INDIA"
            />
            <Playersdisplay
              setAllplayers={setAllplayers}
              allplayers={allplayers}
              Teamname="PAKISTAN"
            />
          </div>
        </div>
      </div>

      <div className="Playerbar w-[28rem]">
        {allplayers.map((player) => {
          return <h2 className="text-white">{player.name}</h2>;
        })}
      </div>
    </div>
  );
}

export default SelectPlayers;
