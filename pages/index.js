import { useState } from "react";
import Playercard from "../Components/Playercard";
import Listdisplay from "../Components/Listdisplay";

export default function Home() {
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

  function addItem2() {
    let value = selected2+1;
    setselected2(value);
    const player2 = {
      name: input2,
      credits: Math.floor(Math.random() * 10),
    };
    setplayers2((players2) => [...players2, player2]);
  }

  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");
  const [players1, setplayers1] = useState([]);
  const [players2, setplayers2] = useState([]);
  const [selected1, setselected1] = useState(0);
  const [selected2, setselected2] = useState(0);

  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-center my-8 font-bold text-3xl">Admin</h1>
      <div className="bg-slate-500 ">
        <h2 className="text-center mt-8 mb-8">Add Players</h2>
        <div className="flex justify-center h-screen">
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
    <div className="List">
        <div className=' bg-cyan-300 w-[22rem]'>{selected2}/11</div>
        <div className="bg-slate-300  text-center w-[22rem] h-[32rem] mr-8 overflow-y-auto">
            <h4>Pakistan</h4>
            <input
              type="text"
              placeholder="Player Name"
              onChange={(e) => setinput2(e.target.value)}
            ></input>
            <button onClick={() => addItem2()}>Add</button>
            <div className="list-container">
              {players2.map((player) => {
                return (
                  <Playercard name={player.name} credits={player.credits} />
                );
              })}
            </div>
          </div>
    </div>
        </div>
      </div>
    </div>
  );
}
