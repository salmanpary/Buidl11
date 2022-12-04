import React from 'react'

const Navbar2 = (props) => {
  let changeHandler = props.changeHandler;
  let StartGameHandler = props.StartGameHandler;

  return (
    <div className='flex flex-col h-screen justify-start mt-20'>
      <div className="text-white font-inter text-6xl ml-4 mt-4 mb-14 font-bold faded rounded-2xl p-4 mr-4  ">
        <span>Buidl 11</span>
      </div>
       <input
            type="number"
            name="size"
            id=""
            placeholder="team size"
            className='rounded-xl p-2 px-4 card-blur  text-white opacity-60 my-4 mx-4 capitalize'
            onChange={changeHandler}
          />
          <input
            type="number"
            name="runmul"
            id=""
            placeholder="run multiplier"
            className='rounded-xl p-2 px-4 card-blur text-white opacity-60 my-4 mx-4 capitalize'
            onChange={changeHandler}
          />
          <input
            type="number"
            name="wicketmul"
            id=""
            placeholder="wicket multiplier"
            className='rounded-xl p-2 px-4 card-blur text-white opacity-60 my-4 mx-4 capitalize'
            onChange={changeHandler}
          />
          <button className=' text-white flex justify-center mx-4  text-xl font-bold faded2 p-2 my-4 rounded-xl' onClick={StartGameHandler}>Start Game</button>
    </div>
  )
}

export default Navbar2