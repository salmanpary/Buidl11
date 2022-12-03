import React, { useState } from 'react'
import Playersdisplay from '../../Components/Playerdisplay';


function SelectPlayers() {

  const [players,setPlayers] = useState([])
  return ( 
    <div className='flex justify-between'>

        <div className='Navbar bg-slate-900 w-64'></div>

        <div className="h-screen flex flex-col ">
      <h1 className="text-center my-8 font-bold text-3xl">User</h1>
      <div className="list-container ">
        <h2 className="text-center mt-8 mb-8">Select and form team</h2>
        <div className="flex justify-center h-screen">
        <Playersdisplay Teamname = "INDIA"/>
        <Playersdisplay Teamname = "PAKISTAN"/>
        </div>
      </div>
    </div>

    <div className='Playerbar bg-slate-900 w-64'></div>

    </div>
  )
}

export default SelectPlayers