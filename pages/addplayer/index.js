import React, { useState } from 'react'
import Listdisplay from '../../Components/Listdisplay';
import Navbar from '../../Components/Navbar';

function Addplayers() {
const x = [1,2]
  var players = ["helo"]
  const [finalPlayers,setFinalPlayers ] = useState([])

  const [startGameData,setStartGameData] = useState({
    size:0,
    runmul:0,
    wicketmul:0
  })
  const StartGameHandler=()=>{
    // if(startGameData.size==0){
    //   alert('please enter the size of the game')
    // }
    console.log(startGameData)
  }


  const changeHandler = (e)=>{
    const {name,value} = e.target
    setStartGameData(({...startGameData,[name]:value}))
  }
  return ( 
    <div className="">
       <img className="absolute h-screen w-screen -z-10 " src="/bg.jpg"/>
      <div className="h-screen flex flex-col">
      <div className="Navbar min-w-[22rem] card-blur">
         <Navbar/>
        </div>
      <div className="">

      <input type="number" name="size" id="" placeholder='team size' onChange={changeHandler}/>
      <input type="number" name="runmul" id="" placeholder='run multiplier'onChange={changeHandler}/>
      <input type="number" name="wicketmul" id="" placeholder='wicket multiplier' onChange={changeHandler}/>
      <button onClick={StartGameHandler}>Start Game</button>
      </div>
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

    </div>
  )
}

export default Addplayers