import React, { useState } from "react";
import Listdisplay from "../../Components/Listdisplay";
import Navbar2 from "../../Components/Navbar2";

function Addplayers() {
  const x = [1, 2];
  var players = ["helo"];
  const [finalPlayers, setFinalPlayers] = useState([]);

  const [startGameData, setStartGameData] = useState({
    size: 0,
    runmul: 0,
    wicketmul: 0,
  });
  const StartGameHandler = () => {
    // if(startGameData.size==0){
    //   alert('please enter the size of the game')
    // }
    console.log(startGameData);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setStartGameData({ ...startGameData, [name]: value });
  };
  return (
    <div className="">
      <img className="absolute  h-screen w-screen -z-10 " src="/bg.jpg" />
      <div className="h-screen w-screen flex ">
        <div className="Navbar  min-w-[22rem] card-blur faded">
          <Navbar2 changeHandler={changeHandler} StartGameHandler={StartGameHandler}/>
        </div>
        <div className="Right-section w-full card-blur">
          <h1 className="text-center my-8 font-bold text-3xl">Admin</h1>
          <div className="flex justify-center">
          <Listdisplay
                    players={players}
                    finalPlayers={finalPlayers}
                    setFinalPlayers={setFinalPlayers}
                    teamname = "India"
                  />
            <Listdisplay
                    players={players}
                    finalPlayers={finalPlayers}
                    setFinalPlayers={setFinalPlayers}
                    teamname = "Pakistan"
                  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addplayers;
