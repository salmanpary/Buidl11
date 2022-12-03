import React from 'react'
import Playercard from './Playercard';
import { useState } from 'react';

const Listdisplay = (props) => {

    function addItem1() {
        if(selected1 == 11)
         {
          console.error("Limit reached");
          return;
         }
        let value = selected1+1;
        setselected1(value);
        const player1 = {
          name: input1,
          credits: Math.floor(Math.random() * 10),
        };
        setplayers1((players1) => [...players1, player1]);
      }

      const [input1, setinput1] = useState("");
      const [players1, setplayers1] = useState([]);
      const [selected1, setselected1] = useState(0);

  return (
    <div className="List">
        <div className=' bg-cyan-300 w-[22rem]'>{selected1}/11</div>
        <div className="bg-slate-300  text-center w-[22rem] h-[32rem] mr-8 overflow-y-auto">
            <h4>India</h4>
            <input
              type="text"
              placeholder="Player Name"
              onChange={(e) => setinput1(e.target.value)}
            ></input>
            <button onClick={() => addItem1()}>Add</button>
            <div className="list-container ">
              {players1.map((player) => {
                return (
                  <Playercard name={player.name} credits={player.credits} />
                );
              })}
            </div>
          </div>
    </div>
  )
}

export default Listdisplay