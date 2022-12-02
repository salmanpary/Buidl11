import { useState } from "react";
import Playercard from "../Components/Playercard";

export default function Home() {
  function addItem1() {
    const player1 = {
      name: input1,
      credits: Math.floor(Math.random() * 10),
    };
    setplayers1((players1) => [...players1, player1]);
  }

  function addItem2() {
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

  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-center my-8 font-bold text-3xl">Admin</h1>
      <div className="bg-slate-500 ">
        <h2 className="text-center mt-8 mb-8">Add Players</h2>
        <div className="flex justify-center h-screen">
          <div className="bg-slate-300  text-center w-[22rem] mr-8">
            <h4>India</h4>
            <input
              type="text"
              placeholder="Player Name"
              onChange={(e) => setinput1(e.target.value)}
            ></input>
            <button onClick={() => addItem1()}>Add</button>
            <div className="list-container">
              {players1.map((player) => {
                return (
                  <Playercard name={player.name} credits={player.credits} />
                );
              })}
            </div>
          </div>
          <div className="bg-slate-300  text-center w-[22rem] mr-8">
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
  );
}
