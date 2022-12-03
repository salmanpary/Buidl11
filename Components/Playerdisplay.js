import React from 'react'
import { useState } from 'react';
import Playeraddcard from './Playeraddcard';

const Playersdisplay = () => {
     
    const players =[
        {name:"virat",id:1},
        {name:"Dhoni",id:2},
        {name:"Sachin",id:3},
        {name:"Ricky",id:4},
    ]

      const [input1, setinput1] = useState("");
      const [selectedplayers, setselectedplayers] = useState([]);
      const [selected, setselected] = useState(0);

  return (
    <div className="List">
        <div className=' bg-cyan-300 w-[22rem]'>{selected}/11</div>
        <div className="bg-slate-300  text-center w-[22rem] h-[32rem] mr-8 overflow-y-auto">
            <h4>India</h4>
            <div className="list-container ">
              {players.map((player) => {
                return (
                  <Playeraddcard name = {player.name} 
                  selectedplayers = {selectedplayers}
                  credits={Math.floor(Math.random()*3+7 )}
                  setselectedplayers = {setselectedplayers}
                  selected={selected}
                  setselected = {setselected} />
                );
              })}
            </div>
            <button>Submit</button>
          </div>
    </div>
  )
}

export default Playersdisplay