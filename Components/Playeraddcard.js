import React from 'react';
import { useState } from 'react';

const Playeraddcard = (props) => {

  let playerlist =[];

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
    <div className={"flex justify-between bg-blue-200 my-4 p-2 mx-2 rounded-2xl " + (buttonstate =="X"?'player-selected':'')}>
        <div className='Details'>
        <h2 className='font-medium text-xl ml-2'>{props.name}</h2>
        <h4>{props.credits}</h4>
        </div>
        <button className='bg-gray-600 text-white p-2 rounded-xl w-14'
        onClick={addtolist}>{buttonstate}</button>
    </div>
  )
}

export default Playeraddcard