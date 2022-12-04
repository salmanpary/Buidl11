import React from 'react'
import { useState, useEffect } from 'react';
import accountFn from "../Components/Accountfn";
import Playeraddcard from './Playeraddcard';
// var final_names = [];
// var final_index = [];

const Playersdisplay = (playerDetails) => {


  const data = playerDetails.playerDetails?.toString();


  var arr = data?.split(",")
  console.log(arr)
  const [selectedPlayersArray, setselectedplayersArray] = useState([]);
  const getId = (nam) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === nam) {
        var a = selectedPlayersArray
        a.push(i)
        selectedPlayersArray(a)
        return i;

      }
    }
  }

  const getId2 = (nam) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === nam) {

        return i;

      }
    }
  }



  const players = playerDetails


  const [selectedplayers, setselectedplayers] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [teamcaps, setteamcaps] = useState("");
  const [selected, setselected] = useState(0);
  useEffect(() => {
    console.log("array:", selectedplayers);
  }, [selectedplayers])




  return (

    <div className="List h-screen ">

      <div className='  w-[22rem] mx-8'></div>
      <input type="text" placeholder="team name" name="name" onChange={(e) => setTeamName(e.target.value)} value={teamName} />
      <button onClick={async () => {
        const player_names = await accountFn();

        var res1 = await player_names.addFantasyTeam(teamName);


      }}>Set</button>

      <div className="card-container rounded-2xl text-center w-[22rem] h-[32rem] mx-8 overflow-y-auto">
        {/* <h4>{props.Teamname}</h4> */}

        <div className="list-container ">
          {arr?.map((i) => {
            return (
              <div onClick={() => getId(i)
              }>
                <Playeraddcard name={i}
                  selectedplayers={selectedplayers}
                  credits={Math.floor(Math.random() * 3 + 7)}
                  setselectedplayers={setselectedplayers}
                  selected={selected}
                  setselected={setselected} />
              </div>
            );
          })}
        </div>

        <button onClick={
          async () => {
            const player_names = await accountFn();

            const res2 = await player_names.addPlayerToFantasyTeam(selectedPlayersArray);
            console.log(res2);
          }
        } >Submit</button>

        <input type="text" placeholder="captian, vc name" name="name" onChange={(e) => setteamcaps(e.target.value)} value={teamcaps} />
        <button onClick={async () => {

          const player_names = await accountFn();
          var datass = teamcaps.split(",")
          const id_of_Cap = getId2(datass[0])
          const id_of_Vc = getId2(datass[1])
          var res1 = await player_names.setCaptain(id_of_Cap, id_of_Vc);

          console.log(res1);
          var res2 = await player_names.bid(0.001)
          console.log(res2);

        }}>Set</button>


      </div>



    </div>
  )
}

export default Playersdisplay