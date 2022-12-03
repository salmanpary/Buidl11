import React from 'react';
import { useState } from 'react';

const Playeraddcard = (props) => {

  function addtolist(){
    if(buttonstate == "Add")
     {
      setbuttonstate("X");
      props.setselected(props.selected+1);
      let playerlist = props.selectedplayers;
      playerlist.push(props.name);
      props.setselectedplayers(playerlist);
      console.log(props.selectedplayers);
     }
     else{
      setbuttonstate("Add");
      props.setselected(props.selected-1);
      let playerlist = props.selectedplayers;
      playerlist.pop();
      props.setselectedplayers(playerlist);
      console.log(props.selectedplayers);
     }
  }

  const [buttonstate, setbuttonstate] = useState("Add");

  return (
    <div className={"event-card w-[24rem] h-16 card-blur card  rounded-2xl flex justify-between items-center p-2 text-white mb-4" + (buttonstate =="X"?'player-selected':'')}>
        <div className='Details flex gap-8 items-center  '>
        <h2 className='font-bold text-2xl ml-2 capitalize'>{props.name}</h2>
        <h4 className='font-bold  text- opacity-50 xl'>{props.credits}</h4>
        </div>
        <button className=' text-white p-2 rounded-xl w-14 h-12'
        onClick={addtolist}>{buttonstate}</button>
    </div>
  )
}

export default Playeraddcard