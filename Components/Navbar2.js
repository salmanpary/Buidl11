import React from 'react'

const Navbar2 = (props) => {
  let changeHandler = props.changeHandler;
  let StartGameHandler = props.StartGameHandler;

  return (
    <div className='flex flex-col h-screen'>
       <input
            type="number"
            name="size"
            id=""
            placeholder="team size"
            onChange={changeHandler}
          />
          <input
            type="number"
            name="runmul"
            id=""
            placeholder="run multiplier"
            onChange={changeHandler}
          />
          <input
            type="number"
            name="wicketmul"
            id=""
            placeholder="wicket multiplier"
            onChange={changeHandler}
          />
          <button onClick={StartGameHandler}>Start Game</button>
    </div>
  )
}

export default Navbar2