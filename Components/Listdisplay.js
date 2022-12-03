import React from 'react'
import Playercard from './Playercard';

const Listdisplay = (props) => {
  return (
    <div>
        <div className=' bg-cyan-300 w-[22rem]'>0/11</div>
        <div className="bg-slate-300  text-center w-[22rem] mr-8">
            <h4>India</h4>
            <input
              type="text"
              placeholder="Player Name"
              onChange={(e) => props.setinput1(e.target.value)}
            ></input>
            <button onClick={() => props.addItem1()}>Add</button>
            <div className="list-container">
              {props.players1.map((player) => {
                return (
                  <Playercard name={player.name} credits={player.credits} />
                );
              })}
            </div>
          </div>
    </div>
  )
}

export default Listdisplay