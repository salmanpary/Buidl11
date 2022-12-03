import React from 'react'
import { useState , useEffect} from 'react';
import Playeraddcard from './Playeraddcard';
import Progressbar from './Progressbar';

const Playersdisplay = (props) => {
     
    const players =[
        {name:"virat",id:1},
        {name:"Dhoni",id:2},
        {name:"Sachin",id:3},
        {name:"Ricky",id:4},
    ]

      const [selectedplayers, setselectedplayers] = useState([]);
      const [selected, setselected] = useState(0);
      useEffect(() => {
        console.log("array:",selectedplayers);
      }, [selectedplayers])
      

  return (
    <div className="List h-screen ">
        <div className='  mx-8  text-white font-bold text-xl'></div>
        <div className="card-container rounded-2xl w-[26rem] h-[32rem] mx-8 overflow-y-auto">
            <h4 className='text-center text-white font-bold text-2xl'>{props.Teamname}</h4>
            <Progressbar value = {selected}/>
            <div className="list-container mt-8">
              {players.map((player) => {
                return (
                  <Playeraddcard  name = {player.name} 
                  selectedplayers = {selectedplayers}
                  credits={Math.floor(Math.random()*3+7 )}
                  setselectedplayers = {setselectedplayers}
                  selected={selected}
                  setselected = {setselected} />
                );
              })}
            </div>
            <button className='text-center text-white font-bold text-xl card-blur p-2 px-4 rounded-2xl'>Submit</button>
          </div>
    </div>
  )
}

export default Playersdisplay