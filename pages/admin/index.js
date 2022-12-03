import { Contract, providers, utils } from "ethers";
import React, { useState } from 'react'
import Listdisplay from '../../Components/Listdisplay';
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { abi, NFT_CONTRACT_ADDRESS } from "../../constants";
import { useWalletContext } from '../../context/WalletProvider';
import accountFn from "../../Components/Accountfn";
function Admin() {

  const { buidl11 } = useWalletContext()
  const x = [1, 2]
  var players = ["helo"]
  const [finalPlayers, setFinalPlayers] = useState([])

  const [startGameData, setStartGameData] = useState({
    size: 0,
    runmul: 0,
    wicketmul: 0
  })



  const StartGameHandler = async () => {
    // if(startGameData.size==0){
    //   alert('please enter the size of the game')
    // }






    const player_names = await accountFn();
const res=await player_names.startGame(parseInt(startGameData.size), parseInt(startGameData.runmul), parseInt(startGameData.wicketmul))
    console.log("admin", res);

    console.log([parseInt(startGameData.size), parseInt(startGameData.runmul), parseInt(startGameData.wicketmul)])

  }




  const changeHandler = (e) => {
    const { name, value } = e.target
    setStartGameData(({ ...startGameData, [name]: value }))
  }
  return (
    <div className="">
      <div className="h-screen flex flex-col">
        <div className="">

          <input type="number" name="size" id="" placeholder='team size' onChange={changeHandler} />
          <input type="number" name="runmul" id="" placeholder='run multiplier' onChange={changeHandler} />
          <input type="number" name="wicketmul" id="" placeholder='wicket multiplier' onChange={changeHandler} />
          <button onClick={StartGameHandler}>Start Game</button>
        </div>
        <h1 className="text-center my-8 font-bold text-3xl">Admin</h1>
        {x.map((index) => {
          return (
            <div className="bg-slate-500 ">
              <h2 className="text-center mt-8 mb-8">Add Players</h2>
              <div className="flex justify-center h-screen">


                <Listdisplay players={players} finalPlayers={finalPlayers} setFinalPlayers={setFinalPlayers} />
              </div>
            </div>
          )
        })}

      </div>
      {players.length} <br />
      {finalPlayers.length}
      {finalPlayers.map((player) => {
        return <h3>poda {player}</h3>
      })}

     <button onClick={async () => {
      if(finalPlayers.length<startGameData.size){
        alert('please select 11 players')
      }
        const player_names = await accountFn();
        const res = await player_names.addPlayerToGame(finalPlayers)
  console.log(res);
      }}>Add Players to gamey</button>


    </div>
  )
}



export default Admin