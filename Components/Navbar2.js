import React from 'react'

const Navbar2 = (props) => {
  let changeHandler = props.changeHandler;
  let StartGameHandler = props.StartGameHandler;

  return (
    <div className='flex flex-col h-screen justify-center'>
       <input
            type="number"
            name="size"
            id=""
            placeholder="team size"
            className='rounded-xl p-2 card-blur text-white opacity-60 my-4 mx-4 capitalize'
            onChange={changeHandler}
          />
          <input
            type="number"
            name="runmul"
            id=""
            placeholder="run multiplier"
            className='rounded-xl p-2 card-blur text-white opacity-60 my-4 mx-4 capitalize'
            onChange={changeHandler}
          />
          <input
            type="number"
            name="wicketmul"
            id=""
            placeholder="wicket multiplier"
            className='rounded-xl p-2 card-blur text-white opacity-60 my-4 mx-4 capitalize'
            onChange={changeHandler}
          />
          <button className=' text-white flex justify-center mx-4  text-xl font-bold card-blur p-2 my-4 rounded-xl' onClick={StartGameHandler}>Start Game</button>
    </div>
  )
}

export default Navbar2