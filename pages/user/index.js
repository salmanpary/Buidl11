import React, { useState } from 'react'
import Listdisplay from '../../Components/Listdisplay';
import Playersdisplay from '../../Components/Playerdisplay';
function SelectPlayers() {

  const [players,setPlayers] = useState([])
  return ( 
    <div className="h-screen flex flex-col">
      <h1 className="text-center my-8 font-bold text-3xl">Admin</h1>
      <div className="bg-slate-500 ">
        <h2 className="text-center mt-8 mb-8">Add Players</h2>
        <div className="flex justify-center h-screen">
        <Playersdisplay setPlayers={setPlayers} players={players}/>
        <Playersdisplay setPlayers={setPlayers} players={players}/>
        </div>
      </div>
    </div>
  )
}

export default SelectPlayers