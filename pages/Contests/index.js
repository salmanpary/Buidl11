import Navbar from "../../Components/Navbar";


function SelectPlayers() {
  const events = [
    {
      name: "Event 1",
      date: "19/02/2022",
      winnings: 50000,
      entry: 149,
      spotsleft: 1205,
    },
    {
      name: "Event 2",
      date: "19/02/2022",
      winnings: 50000,
      entry: 149,
      spotsleft: 8576,
    },
    {
      name: "Event 3",
      date: "19/02/2022",
      winnings: 50000,
      entry: 149,
      spotsleft: 5748,
    },
    {
      name: "Event 4",
      date: "19/02/2022",
      winnings: 50000,
      entry: 149,
      spotsleft: 1889,
    },
    
  ];

 
  return (
    <div className="font-inter">
       <img className="absolute h-screen w-screen -z-10 " src="/bg.jpg"/>
      <div className="flex overflow-hidden container-1 card-blur ">
        
        <div className="Navbar min-w-[22rem] card-blur">
         <Navbar/>
        </div>
  
        <div className="h-screen flex flex-col ">
          <h1 className="justify-start ml-12 my-12 mt-8 font-semibold text-5xl text-white font-inter">Contests</h1>
          <div className=" Line h-[1px] w-[64rem] bg-white opacity-30 ml-12"></div>
          <div className="list-container ">
            <div className=" ">
            <h2 className=" mt-8 mb-2 ml-12 text-white font-bold font-inter text-2xl">Select a contest to join</h2>
            </div>
            
            <div className=" flex flex-wrap ml-12">
              {events.map((event) => {
                return (
                  <div className="event-card w-[30rem] h-48 card-blur card my-6 mr-8 rounded-2xl flex justify-between">
                    <div className="left flex flex-col ml-3 mt-2">
                      <span className="font-semibold text-white my-2 mx-1 text-3xl">{event.name}</span>
                      <span className="text-white font-bold m-1">{event.winnings}</span>
                      <span className="text-white font-medium m-1">{event.spotsleft} Spots left</span>
                      <span className="text-white font-medium m-1">{event.date}</span>
                    </div>
                    <div className="right flex mr-3 mt-2 justify-center align-middle ">
                      <div className=" text-white  rounded-xl m-2  font-bold text-sm">
                        <h2>{event.entry} Rs</h2>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectPlayers;
