import React, { useState } from 'react'
import Listdisplay from '../../Components/Listdisplay';
function Addplayers() {
const x = [1,2]
  var players = ["helo"]
  const [finalPlayers,setFinalPlayers ] = useState([])
  return ( 
    <div className="">
      <div className="h-screen flex flex-col">
      <h1 className="text-center my-8 font-bold text-3xl">Admin</h1>
        {x.map((index)=>{
     return(
      <div className="bg-slate-500 ">
        <h2 className="text-center mt-8 mb-8">Add Players</h2>
        <div className="flex justify-center h-screen">


          <Listdisplay players={players} finalPlayers={finalPlayers} setFinalPlayers={setFinalPlayers}/>
        </div>
      </div>
     )
        })}
      
    </div>
    {players.length} <br />
    {finalPlayers.length}
     {finalPlayers.map((player)=>{
      return <h3>poda {player}</h3>
     })}

    </div>
  )
}

export default Addplayers