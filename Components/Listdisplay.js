import React from 'react'
import Playercard from './Playercard';
import { useState } from 'react';

const Listdisplay = ({ players,finalPlayers,setFinalPlayers}) => {
  const [selectedPlayers,setSelectedPlayers] = useState([])
  const [currentPlayer,setCurrentPlayer]= useState({name:'',jerseyNo:''})

  const handleChange = (e)=>{
    setCurrentPlayer({
      name : e.target.value,
      jersyNo : Math.floor(Math.random()*100)
    })
    
  }

  const addPLayers = (e)=>{
    if(selectedPlayers.length<11){
      setSelectedPlayers([...selectedPlayers,currentPlayer])
      setCurrentPlayer({name:'',jerseyNo:''})
    }
    else console.log('limit exceede')
  }

  const submitHandler = ()=>{
    var arr = []
    {selectedPlayers.map((player)=>{
      arr.push(player.name)
      setFinalPlayers(current=>[...current,player.name])

    })
    console.log(arr.length)
    console.log(arr)
    players.push(arr)
  // setFinalPlayers(current =>[...current,arr])
}
  }

  return (
    <div className="List">
      <div className=' bg-cyan-300 w-[22rem]'>{selectedPlayers.length}/11</div>
      <div className="bg-slate-300  text-center w-[22rem] h-[32rem] mr-8 overflow-y-auto">
        <h4>India</h4>
        <input
          type="text"
          placeholder="Player Name"
          onChange={(e)=>handleChange(e)}
        ></input>
        <button onClick={addPLayers}>Add</button>
        <div className="list-container ">
          {selectedPlayers.map((player) => {
            return (
              <Playercard name={player.name} credits={player.credits} />
            );
          })}
        </div>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </div>
  )
}

export default Listdisplay