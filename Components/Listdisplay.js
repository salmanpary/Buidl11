import React from 'react'
import Playercard from './Playercard';
import { useState } from 'react';
import Progressbar from './Progressbar';

const Listdisplay = ({ players,finalPlayers,setFinalPlayers,teamname}) => {
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
    <div className="List ml-8  overflow-hidden" >
      <div className='w-[26rem] mb-2'>
      <Progressbar value = {selectedPlayers.length}/>
      </div>
      
      <div className=" text-center w-[22rem] h-[32rem] mr-8 overflow-y-scroll  overflow-x-hidden  card-blur faded rounded-xl p-4">
      <h4 className='text-white  text-left font-bold text-3xl mb-4  ml-2'> Team : {teamname}</h4>
      <div className=" Line h-[1px] w-[19rem] bg-white opacity-30 ml-2 m-4"></div>
        <input
          type="text"
          placeholder="Player Name"
          onChange={(e)=>handleChange(e)}
          className="rounded-xl p-2 card-blur text-white opacity-60  -ml-10"
        ></input>
        <button  className='mx-2 text-white font-bold faded p-2 px-3 rounded-xl' onClick={addPLayers}>Add</button>
        <div className="list-container text-white my-4 ">
          {selectedPlayers.map((player) => {
            return (
              <Playercard name={player.name} credits={Math.floor(Math.random()*3+7)} />
            );
          })}
        </div>
        <button className='mx-2 text-white flex justify-start ml-2 text-xl font-bold faded p-1 px-12 my-4 rounded-xl' onClick={submitHandler}>Submit</button>
      </div>
    </div>
  )
}

export default Listdisplay